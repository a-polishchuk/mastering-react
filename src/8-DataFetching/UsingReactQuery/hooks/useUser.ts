import { User } from '8-DataFetching/types';
import { useUserId } from '8-DataFetching/UserContext';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { QueryKeyFactory, Queries } from '../api/QueryKeyFactory';

export function useUser(): UseQueryResult<User> {
  const userId = useUserId();
  const keyBuilder = QueryKeyFactory[Queries.USER_DETAILS];

  return useQuery<User>(keyBuilder(userId));
}
