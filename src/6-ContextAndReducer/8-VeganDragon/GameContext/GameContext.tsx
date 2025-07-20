import { createContextHook } from 'hooks/createContextHook';
import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { Action, GameContextState } from '../types';
import { INITIAL_STATE } from './reducer/initialState';
import { reducer } from './reducer/reducer';

type GameContextType = [GameContextState, Dispatch<Action>];

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGameContext = createContextHook(GameContext, GameContextProvider);

export function GameContextProvider({ children }: { children: ReactNode }) {
    const value = useReducer(reducer, INITIAL_STATE);

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
