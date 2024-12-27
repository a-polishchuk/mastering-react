import { createContext, useContext } from 'react';

const USER_ID = 3;
const UserContext = createContext<number>(USER_ID);

export function useUserId(): number {
    return useContext(UserContext);
}
