import React from 'react'

import { FetchResource } from '../components/FetchResource'
import { Playground } from '../components/Playground'
import { BattleArena } from '../components/BattleArena'
import { BackButton } from '../components/BackButton'

import { Starship } from '../models/Starship'

import { selectStarshipsWinner, getSideWinner } from '../utils/selectWinners'

export function Starships() {
    return (
        <>
            <BackButton />
            <FetchResource url="/starships/">
                {data => (
                    <Playground<Starship>
                        count={data.count}
                        url="/starships/"
                        selectWinner={selectStarshipsWinner}
                    >
                        {(player, opponent, winner, game) => (
                            <BattleArena
                                playerName={player.name}
                                playerValue={player.crew}
                                opponentName={opponent.name}
                                opponentValue={opponent.crew}
                                winner={getSideWinner(winner, player)}
                                game={game}
                                resource="starships"
                            />
                        )}
                    </Playground>
                )}
            </FetchResource>
        </>
    )
}
