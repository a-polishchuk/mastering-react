import { User } from '8-DataFetching/types';
import { useUserId } from '8-DataFetching/UserContext';
import { useQuery } from '@tanstack/react-query';
import { QueryKeyFactory, Queries } from '../api/QueryKeyFactory';

export function useUser() {
  const userId = useUserId();
  const keyBuilder = QueryKeyFactory[Queries.USER_DETAILS];

  return useQuery<User>({
    queryKey: keyBuilder(userId),
  });
}
