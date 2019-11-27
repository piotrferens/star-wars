import React from 'react'
import { useHistory } from 'react-router'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Button from '@material-ui/core/Button'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
    button: {
        position: 'absolute',
        left: 0
    }
})

export function BackButton() {
    const classes = useStyles()
    return (
        <Button onClick={useHistory().goBack} className={classes.button}>
            <ArrowBackIcon fontSize="large" />
        </Button>
    )
}
