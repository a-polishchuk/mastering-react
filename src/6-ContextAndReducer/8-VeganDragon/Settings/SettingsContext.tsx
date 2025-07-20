import { createContextHook } from 'hooks/createContextHook';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { MAX_MOVE_DELAY, MOVE_DELAY } from '../constants';

export type SettingsContextState = {
    useAlternativeGrid: boolean;
    setUseAlternativeGrid: Dispatch<SetStateAction<boolean>>;
    moveDelay: number;
    changeMoveDelay: () => void;
};

const SettingsContext = createContext<SettingsContextState | undefined>(undefined);

export const useSettingsContext = createContextHook(SettingsContext, SettingsContextProvider);

export function SettingsContextProvider({ children }: { children: ReactNode }) {
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
