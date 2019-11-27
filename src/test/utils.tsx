import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory, MemoryHistory } from 'history'
import { render } from '@testing-library/react'

export function renderWithRouter(
    ui: React.ReactElement,
    {
        route = '/',
        history = createMemoryHistory({ initialEntries: [route] })
    }: { route?: string; history?: MemoryHistory } = {}
) {
    const Wrapper: React.ComponentType = ({ children }: { children?: React.ReactNode }) => (
        <Router history={history}>{children}</Router>
    )
    return {
        ...render(ui, { wrapper: Wrapper }),
        history
    }
}

export const delay = (ms = 0) => new Promise(res => setTimeout(res, ms))
