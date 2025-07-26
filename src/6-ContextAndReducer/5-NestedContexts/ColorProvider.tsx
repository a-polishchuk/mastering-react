import { createContextHook } from 'hooks/createContextHook';
import { createContext, ReactNode } from 'react';

const ColorContext = createContext<string | undefined>(undefined);

type ProviderProps = {
    color: string;
    children: ReactNode;
};

export function ColorProvider({ color, children }: ProviderProps) {
    return <ColorContext.Provider value={color}>{children}</ColorContext.Provider>;
}

export function MockColorProvider({ children }: { children: ReactNode }) {
    return <ColorContext.Provider value="#ff0000">{children}</ColorContext.Provider>;
}

export const useColorContext = createContextHook(ColorContext, ColorProvider);
