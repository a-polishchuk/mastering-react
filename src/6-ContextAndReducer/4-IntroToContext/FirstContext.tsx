import { createContext, ReactNode, useContext } from 'react';

const FirstContext = createContext<string | null>(null);

const CONTEXT_VALUE = 'Hello from FirstContextProvider';

export function FirstContextProvider({ children }: { children: ReactNode }) {
    return <FirstContext.Provider value={CONTEXT_VALUE}>{children}</FirstContext.Provider>;
}

export function useFirstContext() {
    const contextValue = useContext(FirstContext);
    if (contextValue === null) {
        throw new Error('useFirstContext must be used within a FirstContextProvider');
    }
    return contextValue;
}
