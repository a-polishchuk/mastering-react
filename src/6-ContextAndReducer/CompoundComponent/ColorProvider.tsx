import { createContext, ReactNode, useContext } from 'react';

const ColorContext = createContext<string>('#97bbf5');

export function useColorContext() {
    return useContext(ColorContext);
}

export function ColorProvider({ color, children }: { color: string; children: ReactNode }) {
    return <ColorContext.Provider value={color}>{children}</ColorContext.Provider>;
}
