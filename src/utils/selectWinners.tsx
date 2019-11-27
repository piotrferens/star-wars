import { Person } from '../models/Person'
import { Starship } from '../models/Starship'

export const selectPeopleWinner = (player: Person, opponent: Person) => {
    const playerMass = Number(player.mass)
    const opponentMass = Number(opponent.mass)

    if (playerMass > opponentMass) {
        return player
    } else if (opponentMass > playerMass) {
        return opponent
    }

    return 'draw'
}

export const selectStarshipsWinner = (player: Starship, opponent: Starship) => {
    const playerCrew = Number(player.crew)
    const opponentMass = Number(opponent.crew)

    if (playerCrew > opponentMass) {
        return player
    } else if (opponentMass > playerCrew) {
        return opponent
    }

    return 'draw'
}

export function getSideWinner<T extends any>(winner: T | 'draw', player: T) {
    return winner === 'draw' ? 'draw' : winner.name === player.name ? 'left' : 'right'
}
