import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';

import { Action, GameContextState } from '../types';
import { reducer } from './reducer';
import { INITIAL_STATE } from './reducer/initialState';

type GameContextType = [GameContextState, Dispatch<Action>];

const defaultValue: any = null;
const GameContext = createContext<GameContextType>(defaultValue);

export function useGameContext() {
  return useContext(GameContext);
}

export function GameContextProvider({ children }: { children: ReactNode }): JSX.Element {
  const value = useReducer(reducer, INITIAL_STATE);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
