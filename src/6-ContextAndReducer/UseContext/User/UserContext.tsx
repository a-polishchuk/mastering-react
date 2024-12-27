import { createContext, ReactNode, useContext } from 'react';
import { User } from './User';
import { useUser } from './useUser';

const UserContext = createContext<User | undefined>(undefined);

export function useUserContext() {
    return useContext(UserContext);
}

type ProviderProps = {
    userId: number;
    children: ReactNode;
};

export function UserProvider({ userId, children }: ProviderProps) {
    const user = useUser(userId);

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
