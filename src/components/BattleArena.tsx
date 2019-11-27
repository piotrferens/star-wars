import React, { useEffect } from 'react'

import makeStyles from '@material-ui/styles/makeStyles'

import { useGameDispatch, useGameState, Resource } from '../GameContext'
import { PlayCard } from './cards/PlayCard'
import { getCardColor } from '../utils/getCardColor'

const useStyles = makeStyles({
    counter: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

interface BattleArenaProps {
    playerName: string
    opponentName: string
    playerValue: string
    opponentValue: string
    game: number
    winner: 'draw' | 'left' | 'right'
    resource: Resource
}

export function BattleArena({
    playerName,
    opponentName,
    playerValue,
    opponentValue,
    winner,
    game,
    resource
}: BattleArenaProps) {
    const classes = useStyles()

    const gameState = useGameState()
    const gameDispatch = useGameDispatch()

    const playerCardColor = getCardColor(winner, 'left')
    const opponentCardColor = getCardColor(winner, 'right')

    useEffect(() => {
        if (winner === 'left') {
            gameDispatch({ type: 'INCREMENT_LEFT_SIDE_WINS', payload: resource })
        } else if (winner === 'right') {
            gameDispatch({ type: 'INCREMENT_RIGHT_SIDE_WINS', payload: resource })
        }
    }, [game, winner, gameDispatch, resource])

    return (
        <>
            <div className={classes.counter} data-testid="leftCounter">
                {gameState[resource].leftSideWins}
            </div>
            <PlayCard name={playerName} value={playerValue} color={playerCardColor} />
            <div>VS</div>
            <PlayCard name={opponentName} value={opponentValue} color={opponentCardColor} />
            <div className={classes.counter} data-testid="rightCounter">
                {gameState[resource].rightSideWins}
            </div>
        </>
    )
}
