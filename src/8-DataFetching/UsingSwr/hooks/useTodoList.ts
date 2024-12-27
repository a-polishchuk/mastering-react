import { Todo } from '8-DataFetching/types';
import { useUserId } from '8-DataFetching/UserContext';
import useSWR, { SWRResponse } from 'swr';
import { Queries, QueryKeyFactory } from '../api/QueryKeyFactory';

export function useTodoList(): SWRResponse<Todo[]> {
    const userId = useUserId();
    const keyBuilder = QueryKeyFactory[Queries.TODO_LIST];

    return useSWR<Todo[]>(keyBuilder(userId));
}
