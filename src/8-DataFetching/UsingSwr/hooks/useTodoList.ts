import { Todo } from '8-DataFetching/types';
import { useUserId } from '8-DataFetching/UserContext';
import useSWR, { SWRResponse } from 'swr';

export function useTodoList(): SWRResponse<Todo[]> {
  const userId = useUserId();
  return useSWR<Todo[]>(`todos?userId=${userId}`);
}
