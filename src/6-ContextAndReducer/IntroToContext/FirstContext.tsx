import { createContext, ReactNode, useContext } from 'react';

const FirstContext = createContext<string | null>(null);

export function FirstContextProvider({ children }: { children: ReactNode }) {
    const contextValue = 'Hello from FirstContextProvider';

    return <FirstContext.Provider value={contextValue}>{children}</FirstContext.Provider>;
}

export function useFirstContext() {
    const contextValue = useContext(FirstContext);
    if (!contextValue) {
        throw new Error('useFirstContext must be used within a FirstContextProvider');
    }
    return contextValue;
}
