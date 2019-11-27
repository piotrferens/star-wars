import React from 'react'

import makeStyles from '@material-ui/core/styles/makeStyles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    card: {
        minWidth: 275
    },
    title: {
        fontSize: 14
    }
})

interface Props {
    name: string
    value: string
    color: string
}

export function PlayCard({ name, value, color }: Props) {
    const classes = useStyles()

    return (
        <Grid item xs={12} md={4}>
            <Card className={classes.card} style={{ border: `2px solid ${color}` }}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" align="center">
                        {name}
                    </Typography>
                    <Typography variant="h5" component="h2" align="center">
                        {value}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
