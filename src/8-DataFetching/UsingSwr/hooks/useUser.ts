import { User } from '8-DataFetching/types';
import { useUserId } from '8-DataFetching/UserContext';
import useSWR, { SWRResponse } from 'swr';

import { RequestKey } from '../api/RequestKey';

export function useUser(): SWRResponse<User> {
  const userId = useUserId();
  return useSWR<User>(RequestKey.user(userId));
}
