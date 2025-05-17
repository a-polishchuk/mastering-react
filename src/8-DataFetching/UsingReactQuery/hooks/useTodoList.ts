import { Todo } from '8-DataFetching/types';
import { useUserId } from '8-DataFetching/UserContext';
import { useQuery } from '@tanstack/react-query';
import { fetchFunction } from '../api/fetchFunction';
import { QueryKeyFactory, Queries } from '../api/QueryKeyFactory';

export function useTodoList() {
    const { userId } = useUserId();
    const buildKey = QueryKeyFactory[Queries.TODO_LIST];

    return useQuery<Todo[]>({
        initialData: new Array<Todo>(),
        initialDataUpdatedAt: 0, // it's important to set this to 0 to trigger fetch
        queryKey: buildKey(userId),
        queryFn: () => fetchFunction(`todos?userId=${userId}`),
    });
}
