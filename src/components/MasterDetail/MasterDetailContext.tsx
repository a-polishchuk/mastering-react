import { createContext, useContext } from 'react';
import { PathRouteProps } from 'react-router';

export type MasterDetailState = {
    addRoute: (route: PathRouteProps) => void;
};

export const MasterDetailContext = createContext<MasterDetailState | null>(null);

export function useMasterDetailContext() {
    const contextValue = useContext(MasterDetailContext);
    if (!contextValue) {
        throw new Error('Do not use this hook outside of correspondent Provider');
    }
    return contextValue;
}
