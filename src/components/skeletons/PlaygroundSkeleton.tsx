import React from 'react'

import makeStyles from '@material-ui/styles/makeStyles'
import Grid from '@material-ui/core/Grid'
import Skeleton from '@material-ui/lab/Skeleton'

import { CardSkeleton } from './CardSkeleton'

const useStyles = makeStyles({
    grid: {
        marginTop: 20
    }
})

export function PlaygroundSkeleton() {
    const classes = useStyles()

    return (
        <>
            <Grid
                container
                spacing={5}
                alignItems="center"
                justify="center"
                className={classes.grid}
            >
                <Skeleton variant="rect" width={20} height={20} />
                <CardSkeleton />
                <div>VS</div>
                <CardSkeleton />
                <Skeleton variant="rect" width={20} height={20} />
            </Grid>
            <Grid container justify="center" spacing={5} className={classes.grid}>
                <Skeleton variant="rect" width={120} height={36} />
            </Grid>
        </>
    )
}
