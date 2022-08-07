import { User } from '8-DataFetching/types';
import { useUserId } from '8-DataFetching/UserContext';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export function useUser(): UseQueryResult<User> {
  const userId = useUserId();
  return useQuery<User>([`users/${userId}`]);
}
