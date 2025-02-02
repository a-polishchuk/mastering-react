import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';
import { Action, GameContextState } from '../types';
import { INITIAL_STATE } from './reducer/initialState';
import { reducer } from './reducer/reducer';

type GameContextType = [GameContextState, Dispatch<Action>];

const GameContext = createContext<GameContextType | null>(null);

export function useGameContext() {
    const contextValue = useContext(GameContext);
    if (!contextValue) {
        throw new Error('This component should be used under GameContextProvider!');
    }
    return contextValue;
}

export function GameContextProvider({ children }: { children: ReactNode }) {
    const value = useReducer(reducer, INITIAL_STATE);

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
