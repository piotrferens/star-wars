import React from 'react'

import { FetchResource } from '../components/FetchResource'
import { Playground } from '../components/Playground'
import { BattleArena } from '../components/BattleArena'
import { BackButton } from '../components/BackButton'

import { Person } from '../models/Person'

import { selectPeopleWinner, getSideWinner } from '../utils/selectWinners'

export function People() {
    return (
        <>
            <BackButton />
            <FetchResource url="/people/">
                {data => (
                    <Playground<Person>
                        count={data.count}
                        url="/people/"
                        selectWinner={selectPeopleWinner}
                    >
                        {(player, opponent, winner, game) => (
                            <BattleArena
                                playerName={player.name}
                                playerValue={player.mass}
                                opponentName={opponent.name}
                                opponentValue={opponent.mass}
                                winner={getSideWinner(winner, player)}
                                game={game}
                                resource="people"
                            />
                        )}
                    </Playground>
                )}
            </FetchResource>
        </>
    )
}
