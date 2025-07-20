import { createContextHook } from 'hooks/createContextHook';
import { createContext, ReactNode, useState } from 'react';

export type UserContextType = {
    userId: number;
    setUserId: (userId: number) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserId = createContextHook(UserContext, UserContextProvider);

export function UserContextProvider({ children }: { children: ReactNode }) {
    const [userId, setUserId] = useState(1);
    return <UserContext.Provider value={{ userId, setUserId }}>{children}</UserContext.Provider>;
}
