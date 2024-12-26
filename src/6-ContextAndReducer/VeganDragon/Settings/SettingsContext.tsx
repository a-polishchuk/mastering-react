import { MAX_MOVE_DELAY, MOVE_DELAY } from '../constants';
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { ProviderProps } from 'types/ProviderProps';

export type SettingsContextState = {
  useAlternativeGrid: boolean;
  setUseAlternativeGrid: Dispatch<SetStateAction<boolean>>;
  moveDelay: number;
  changeMoveDelay: () => void;
};

const defaultValue: any = null;
const SettingsContext = createContext<SettingsContextState>(defaultValue);

export function useSettingsContext() {
  const contextValue = useContext(SettingsContext);
  if (!contextValue) {
    throw new Error('Settings context is only available under SettingsContextProvider!');
  }
  return contextValue;
}

export function SettingsContextProvider({ children }: ProviderProps) {
  const [useAlternativeGrid, setUseAlternativeGrid] = useState<boolean>(false);
  const [moveDelay, setMoveDelay] = useState<number>(MOVE_DELAY);

  const changeMoveDelay = () => {
    setMoveDelay((value) => {
      return value === MAX_MOVE_DELAY ? MOVE_DELAY : value + MOVE_DELAY;
    });
  };

  const contextValue: SettingsContextState = {
    useAlternativeGrid,
    setUseAlternativeGrid,
    moveDelay,
    changeMoveDelay,
  };

  return <SettingsContext.Provider value={contextValue}>{children}</SettingsContext.Provider>;
}
