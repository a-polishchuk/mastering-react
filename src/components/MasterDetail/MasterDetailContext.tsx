import { createContextHook } from 'hooks/createContextHook';
import { createContext } from 'react';
import { PathRouteProps } from 'react-router';

export type MasterDetailState = {
    addRoute: (route: PathRouteProps) => void;
};

export const MasterDetailContext = createContext<MasterDetailState | undefined>(undefined);

export const useMasterDetailContext = createContextHook(
    MasterDetailContext,
    'MasterDetailProvider',
);
