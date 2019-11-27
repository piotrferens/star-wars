import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import { ResourceCard } from '../components/cards/ResourceCard'

export function ChooseResource() {
    return (
        <>
            <Typography component="div">
                <Box textAlign="center" fontSize={22} m={3}>
                    Choose a resource you want to play
                </Box>
            </Typography>
            <Grid container spacing={5} alignItems="flex-end" justify="center">
                <ResourceCard
                    title="People"
                    src="https://icon-library.net/images/luke-skywalker-icon/luke-skywalker-icon-8.jpg"
                    path="/people"
                />
                <ResourceCard
                    title="Starships"
                    src="https://vignette.wikia.nocookie.net/starwars/images/6/69/Various_ships-SWU.jpg/revision/latest?cb=20170401153204"
                    path="/starships"
                />
            </Grid>
        </>
    )
}
