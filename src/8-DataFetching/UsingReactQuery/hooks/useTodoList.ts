import { Todo } from '8-DataFetching/types';
import { useUserId } from '8-DataFetching/UserContext';
import { useQuery } from '@tanstack/react-query';
import { QueryKeyFactory, Queries } from '../api/QueryKeyFactory';

export function useTodoList() {
    const userId = useUserId();
    const keyBuilder = QueryKeyFactory[Queries.TODO_LIST];

    return useQuery<Todo[]>({
        queryKey: keyBuilder(userId),
        initialData: new Array<Todo>(),
    });
}
