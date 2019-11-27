import { selectPeopleWinner, selectStarshipsWinner, getSideWinner } from '../utils/selectWinners'
import { personFactory } from '../models/Person'
import { starshipFactory } from '../models/Starship'

describe('selectPeopleWinner', () => {
    it('sets opponent as winner', () => {
        expect(
            selectPeopleWinner(personFactory({ mass: '23' }), personFactory({ mass: '25' }))
        ).toMatchObject({
            mass: '25'
        })
    })

    it('sets player as winner', () => {
        expect(
            selectPeopleWinner(personFactory({ mass: '57' }), personFactory({ mass: '12' }))
        ).toMatchObject({
            mass: '57'
        })
    })

    it('sets draw', () => {
        expect(
            selectPeopleWinner(personFactory({ mass: '23' }), personFactory({ mass: '23' }))
        ).toEqual('draw')
    })
})

describe('selectStarshipsWinner', () => {
    it('sets opponent as winner', () => {
        expect(
            selectStarshipsWinner(starshipFactory({ crew: '12' }), starshipFactory({ crew: '14' }))
        ).toMatchObject({
            crew: '14'
        })
    })

    it('sets player as winner', () => {
        expect(
            selectStarshipsWinner(starshipFactory({ crew: '15' }), starshipFactory({ crew: '3' }))
        ).toMatchObject({
            crew: '15'
        })
    })

    it('sets draw', () => {
        expect(
            selectStarshipsWinner(starshipFactory({ crew: '50' }), starshipFactory({ crew: '50' }))
        ).toEqual('draw')
    })
})

describe('getSideWinner', () => {
    it('sets opponent side as winner', () => {
        expect(getSideWinner({ name: 'yoda' }, { name: 'luke skywalker' })).toEqual('right')
    })

    it('sets player side as winner', () => {
        expect(getSideWinner({ name: 'darth vader' }, { name: 'darth vader' })).toEqual('left')
    })

    it('sets draw', () => {
        expect(getSideWinner('draw', personFactory({ name: 'anakin skywalker' }))).toEqual('draw')
    })
})
