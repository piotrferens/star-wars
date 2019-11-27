import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Container from '@material-ui/core/Container'

import { ChooseResource } from './pages/ChooseResource'
import { People } from './pages/People'
import { Starships } from './pages/Starships'
import { GameContext } from './GameContext'
import { SWRConfig } from 'swr'
import { swrConfig } from './swrConfig'

export function App() {
    return (
        <SWRConfig value={swrConfig}>
            <GameContext>
                <Container maxWidth="md" component="main">
                    <Switch>
                        <Route exact path="/" component={ChooseResource} />
                        <Route path="/people" component={People} />
                        <Route path="/starships" component={Starships} />
                        <Redirect to="/" />
                    </Switch>
                </Container>
            </GameContext>
        </SWRConfig>
    )
}
