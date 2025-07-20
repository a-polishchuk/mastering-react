import { createContextHook } from 'hooks/createContextHook';
import { createContext, ReactNode } from 'react';
import { User } from './User';
import { useUser } from './useUser';

const UserContext = createContext<User | null | undefined>(undefined);

export const useUserContext = createContextHook(UserContext, UserProvider);

type ProviderProps = {
    userId: number;
    children: ReactNode;
};

export function UserProvider({ userId, children }: ProviderProps) {
    const user = useUser(userId);

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
