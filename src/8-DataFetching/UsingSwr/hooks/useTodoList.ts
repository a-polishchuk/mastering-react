import { Todo } from '8-DataFetching/types';
import { useUserId } from '8-DataFetching/UserContext';
import useSWR, { SWRResponse } from 'swr';

import { RequestKey } from '../api/RequestKey';

export function useTodoList(): SWRResponse<Todo[]> {
  const userId = useUserId();
  return useSWR<Todo[]>(RequestKey.todos(userId));
}
