import React from 'react'
import { act } from 'react-dom/test-utils'

import { App } from '../App'
import { renderWithRouter } from './utils'
import { starshipFactory } from '../models/Starship'
import { personFactory } from '../models/Person'
import customGlobal from '../setupTests'

describe('App', () => {
    beforeEach(() => {
        customGlobal.fetch.resetMocks()
    })

    it('displays main page', () => {
        const { container } = renderWithRouter(<App />)
        expect(container.innerHTML).toMatch('Choose a resource you want to play')
    })

    it('displays main page when route is incorrect', () => {
        const { container, history } = renderWithRouter(<App />, { route: '/some/bad/route' })
        expect(history.location.pathname).toEqual('/')
        expect(container.innerHTML).toMatch('Choose a resource you want to play')
    })

    it('displays people page', () => {
        const { history } = renderWithRouter(<App />, { route: '/people' })
        expect(history.location.pathname).toEqual('/people')
    })

    it('displays starships page', () => {
        const { history } = renderWithRouter(<App />, { route: '/starships' })
        expect(history.location.pathname).toEqual('/starships')
    })

    it('properly shows the winner for starships', async () => {
        customGlobal.fetch
            .mockResponseOnce(JSON.stringify({ count: 4 }))
            .mockResponseOnce(JSON.stringify(starshipFactory({ crew: '9', name: 'starship1' })))
            .mockResponseOnce(JSON.stringify(starshipFactory({ crew: '8', name: 'starship2' })))

        let wrapper: any

        await act(async () => {
            wrapper = renderWithRouter(<App />, {
                route: '/starships'
            })
        })

        expect(wrapper.getByTestId('leftCounter').innerHTML).toEqual('1')
        expect(wrapper.getByTestId('rightCounter').innerHTML).toEqual('0')
    })

    it('properly shows the winner for people', async () => {
        customGlobal.fetch
            .mockResponseOnce(JSON.stringify({ count: 4 }))
            .mockResponseOnce(JSON.stringify(personFactory({ mass: '19', name: 'person1' })))
            .mockResponseOnce(JSON.stringify(personFactory({ mass: '29', name: 'person2' })))

        let wrapper: any

        await act(async () => {
            wrapper = renderWithRouter(<App />, {
                route: '/people'
            })
        })

        expect(wrapper.getByTestId('leftCounter').innerHTML).toEqual('0')
        expect(wrapper.getByTestId('rightCounter').innerHTML).toEqual('1')
    })
})
