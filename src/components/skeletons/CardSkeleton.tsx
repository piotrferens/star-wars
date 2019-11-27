import React from 'react'

import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = makeStyles(() => ({
    grid: {
        marginTop: 20
    },
    card: {
        minWidth: 275,
        height: 96
    },
    title: {
        fontSize: 14
    }
}))

export function CardSkeleton() {
    const classes = useStyles()

    return (
        <Grid item xs={12} md={4}>
            <Card className={classes.card}>
                <CardContent>
                    <Skeleton height={21} />
                    <Skeleton height={31} />
                </CardContent>
            </Card>
        </Grid>
    )
}
