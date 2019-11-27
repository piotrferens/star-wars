import React, { useState } from 'react'
import useSWR from 'swr'

import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/styles/makeStyles'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

import { ErrorMessage } from './ErrorMessage'
import { PlaygroundSkeleton } from './skeletons/PlaygroundSkeleton'

import { getUniqueRandomNumbers } from '../utils/uniqueNumbers'

const useStyles = makeStyles({
    grid: {
        marginTop: 20
    },
    box: {
        textAlign: 'center',
        marginTop: 20
    },
    span: {
        marginLeft: 6
    }
})

interface PlaygroundProps<T> {
    url: '/people/' | '/starships/'
    count: number
    children(player: T, opponent: T, winner: T | 'draw', game: number): React.ReactNode
    selectWinner(player: T, opponent: T): T | 'draw'
}

export function Playground<T>({ count, url, children, selectWinner }: PlaygroundProps<T>) {
    const classes = useStyles()

    const [numberOfGames, setNumberOfGames] = useState(0)
    const [resources, setResources] = useState(getUniqueRandomNumbers(count))

    const player = useSWR(`${url}${resources[0]}/`)
    const opponent = useSWR(`${url}${resources[1]}/`)

    if (!player.isValidating && !opponent.isValidating && (player.error || opponent.error)) {
        return (
            <ErrorMessage
                text="Failed to fetch players"
                onRetryClick={() => {
                    player.revalidate()
                    opponent.revalidate()
                }}
            />
        )
    }

    if (!player.data || !opponent.data) {
        return <PlaygroundSkeleton />
    }

    const onPlayAgain = () => {
        setResources(getUniqueRandomNumbers(count))
        setNumberOfGames(numberOfGames + 1)
    }

    return (
        <>
            <Grid
                container
                spacing={5}
                alignItems="center"
                justify="center"
                className={classes.grid}
            >
                {children(
                    player.data,
                    opponent.data,
                    selectWinner(player.data, opponent.data),
                    numberOfGames
                )}
            </Grid>
            <Box className={classes.box}>
                <Button onClick={onPlayAgain}>
                    Play again
                    <span className={classes.span} role="img" aria-label="Swords">
                        ⚔️
                    </span>
                </Button>
            </Box>
        </>
    )
}
