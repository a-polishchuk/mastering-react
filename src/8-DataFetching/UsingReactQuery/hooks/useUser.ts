import { User } from '8-DataFetching/types';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { useUserId } from '../UserContext';

export function useUser(): UseQueryResult<User> {
  const userId = useUserId();
  return useQuery<User>([`users/${userId}`]);
}
