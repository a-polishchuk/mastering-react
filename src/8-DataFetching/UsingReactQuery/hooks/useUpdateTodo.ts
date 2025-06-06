import { Todo } from '8-DataFetching/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchFunction } from '../api/fetchFunction';
import { QueryKeyFactory, Queries } from '../api/QueryKeyFactory';

export function useUpdateTodo() {
    const queryClient = useQueryClient();
    const buildTodoListKey = QueryKeyFactory[Queries.TODO_LIST];

    return useMutation({
        mutationKey: ['updateTodo'],
        mutationFn: async (todo: Todo): Promise<Todo> => {
            return fetchFunction(`todos/${todo.id}`, {
                method: 'PUT',
                body: JSON.stringify(todo),
            });
        },
        onMutate: async (newTodo) => {
            const previousTodos = queryClient.getQueryData<Todo[]>(
                buildTodoListKey(newTodo.userId),
            );
            if (previousTodos) {
                queryClient.setQueryData(
                    buildTodoListKey(newTodo.userId),
                    previousTodos.map((todo) => (todo.id === newTodo.id ? newTodo : todo)),
                );
            }
            return {
                previousTodos,
                userId: newTodo.userId,
            };
        },
        onError: (err, newTodo, context) => {
            if (context?.previousTodos && context.userId) {
                queryClient.setQueryData(buildTodoListKey(context.userId), context.previousTodos);
            }
        },
        // onSettled: (data, error, variables) => {
        //     queryClient.invalidateQueries({
        //         queryKey: buildTodoListKey(variables.userId),
        //     });
        // },
    });
}
