import { createContext, ReactNode, useContext, useState } from 'react';

export type UserContextType = {
    userId: number;
    setUserId: (userId: number) => void;
};

const UserContext = createContext<UserContextType | null>(null);

export function useUserId() {
    const contextValue = useContext(UserContext);
    if (contextValue === null) {
        throw new Error('useUserId must be used within a UserContext');
    }
    return contextValue;
}

export function UserContextProvider({ children }: { children: ReactNode }) {
    const [userId, setUserId] = useState(1);
    return <UserContext.Provider value={{ userId, setUserId }}>{children}</UserContext.Provider>;
}
