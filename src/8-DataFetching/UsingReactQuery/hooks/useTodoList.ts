import { Todo } from '8-DataFetching/types';
import { useUserId } from '8-DataFetching/UserContext';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export function useTodoList(): UseQueryResult<Todo[]> {
  const userId = useUserId();
  return useQuery<Todo[]>([`todos?userId=${userId}`]);
}
