import { Todo } from '8-DataFetching/types';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { useUserId } from '../UserContext';

export function useTodoList(): UseQueryResult<Todo[]> {
  const userId = useUserId();
  return useQuery<Todo[]>([`todos?userId=${userId}`]);
}
