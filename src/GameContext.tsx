import React from 'react'

const initialState = {
    people: {
        leftSideWins: 0,
        rightSideWins: 0
    },
    starships: {
        leftSideWins: 0,
        rightSideWins: 0
    }
}

const dispatchMock: React.Dispatch<Action> = () => {}
const GameStateContext = React.createContext(initialState)
const GameContextDispatch = React.createContext(dispatchMock)

type Resource = 'people' | 'starships'

type Action =
    | { type: 'INCREMENT_LEFT_SIDE_WINS'; payload: Resource }
    | { type: 'INCREMENT_RIGHT_SIDE_WINS'; payload: Resource }

function gameReducer(state: typeof initialState, action: Action) {
    switch (action.type) {
        case 'INCREMENT_LEFT_SIDE_WINS':
            return {
                ...state,
                [action.payload]: {
                    ...state[action.payload],
                    leftSideWins: state[action.payload].leftSideWins + 1
                }
            }
        case 'INCREMENT_RIGHT_SIDE_WINS':
            return {
                ...state,
                [action.payload]: {
                    ...state[action.payload],
                    rightSideWins: state[action.payload].rightSideWins + 1
                }
            }
        default:
            return state
    }
}

export function GameContext(props: { children: React.ReactNode }) {
    const [state, dispatch] = React.useReducer(gameReducer, initialState)

    return (
        <GameStateContext.Provider value={state}>
            <GameContextDispatch.Provider value={dispatch}>
                {props.children}
            </GameContextDispatch.Provider>
        </GameStateContext.Provider>
    )
}

export function useGameState() {
    return React.useContext(GameStateContext)
}

export function useGameDispatch() {
    return React.useContext(GameContextDispatch)
}
