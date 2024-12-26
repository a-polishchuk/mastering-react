import { createContext, useContext } from 'react';
import { PathRouteProps } from 'react-router-dom';

export type MasterDetailState = {
  routes: PathRouteProps[];
  addRoute: (route: PathRouteProps) => void;
};

const defaultValue: any = null;
export const MasterDetailContext = createContext<MasterDetailState>(defaultValue);

export function useMasterDetailContext() {
  const contextValue = useContext(MasterDetailContext);
  if (!contextValue) {
    throw new Error('Do not use this hook outside of correspondent Provider');
  }
  return contextValue;
}
