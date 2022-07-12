import { createContext, ReactNode, useContext } from 'react';

import { User } from './User';
import { useUser } from './useUser';

const UserContext = createContext<User | undefined>(undefined);

export function useUserContext() {
  return useContext(UserContext);
}

interface ProviderProps {
  userId: number;
  children: ReactNode;
}

export function UserProvider({ userId, children }: ProviderProps): JSX.Element {
  const user = useUser(userId);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
