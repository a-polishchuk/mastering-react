import { User } from '8-DataFetching/types';
import { useUserId } from '8-DataFetching/UserContext';
import useSWR, { SWRResponse } from 'swr';

export function useUser(): SWRResponse<User> {
  const userId = useUserId();
  return useSWR<User>(`users/${userId}`);
}
