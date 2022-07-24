import { createContext, useContext } from 'react';
import { PathRouteProps } from 'react-router-dom';

export interface MasterDetailState {
  routes: PathRouteProps[];
  addRoute: (route: PathRouteProps) => void;
}

const defaultValue: any = null;
export const MasterDetailContext = createContext<MasterDetailState>(defaultValue);

export function useMasterDetailContext() {
  return useContext(MasterDetailContext);
}
