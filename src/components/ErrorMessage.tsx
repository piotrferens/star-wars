import React from 'react'

import { Theme } from '@material-ui/core/styles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Button from '@material-ui/core/Button'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import WarningIcon from '@material-ui/icons/Warning'

const useStyles = makeStyles((theme: Theme) => ({
    error: {
        backgroundColor: theme.palette.error.dark,
        marginTop: 20
    },
    message: {
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        fontSize: 20,
        opacity: 0.9,
        marginRight: theme.spacing(1)
    }
}))

interface Props {
    text: string
    onRetryClick?(): void
}

export function ErrorMessage({ text, onRetryClick }: Props) {
    const classes = useStyles()

    return (
        <SnackbarContent
            className={classes.error}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <WarningIcon className={classes.icon} />
                    {text}
                </span>
            }
            action={
                <>
                    {onRetryClick && (
                        <Button onClick={onRetryClick} color="inherit">
                            Retry
                        </Button>
                    )}
                </>
            }
        />
    )
}
