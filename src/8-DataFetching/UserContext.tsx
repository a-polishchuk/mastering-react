import { createContext, useContext, useState } from 'react';

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

export function UserContextProvider({ children }: { children: React.ReactNode }) {
    const [userId, setUserId] = useState(3);
    return <UserContext.Provider value={{ userId, setUserId }}>{children}</UserContext.Provider>;
}
