import { Todo } from '8-DataFetching/types';
import { useUserId } from '8-DataFetching/UserContext';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { QueryKeyFactory, Queries } from '../api/QueryKeyFactory';

export function useTodoList(): UseQueryResult<Todo[]> {
  const userId = useUserId();
  const keyBuilder = QueryKeyFactory[Queries.TODO_LIST];

  return useQuery<Todo[]>(keyBuilder(userId));
}
