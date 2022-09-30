import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { ProviderProps } from 'types/ProviderProps';

export interface SettingsContextState {
  useAlternativeGrid: boolean;
  setUseAlternativeGrid: Dispatch<SetStateAction<boolean>>;
}

const defaultValue: any = null;
const SettingsContext = createContext<SettingsContextState>(defaultValue);

export function useSettingsContext() {
  const contextValue = useContext(SettingsContext);
  if (!contextValue) {
    throw new Error('Settings context is only available under SettingsContextProvider!');
  }
  return contextValue;
}

export function SettingsContextProvider({ children }: ProviderProps): JSX.Element {
  const [useAlternativeGrid, setUseAlternativeGrid] = useState<boolean>(false);

  const contextValue: SettingsContextState = {
    useAlternativeGrid,
    setUseAlternativeGrid,
  };

  return <SettingsContext.Provider value={contextValue}>{children}</SettingsContext.Provider>;
}
