import React from 'react'
import { Link } from 'react-router-dom'

import makeStyles from '@material-ui/core/styles/makeStyles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CardActionArea from '@material-ui/core/CardActionArea'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
    cardHeader: {
        backgroundColor: theme.palette.grey[200]
    },
    image: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    link: {
        color: 'inherit',
        textDecoration: 'none'
    }
}))

interface Props {
    title: string
    src: string
    path: string
}

export function ResourceCard({ title, src, path }: Props) {
    const classes = useStyles()

    return (
        <Grid item xs={12} md={4}>
            <Card>
                <CardHeader
                    title={title}
                    titleTypographyProps={{ align: 'center' }}
                    className={classes.cardHeader}
                />
                <Link to={path} className={classes.link}>
                    <CardActionArea>
                        <CardContent>
                            <img className={classes.image} src={src} alt="" />
                        </CardContent>
                        <Box textAlign="center" m={1}>
                            <Typography variant="button" color="primary" align="center">
                                Choose
                            </Typography>
                        </Box>
                    </CardActionArea>
                </Link>
            </Card>
        </Grid>
    )
}
