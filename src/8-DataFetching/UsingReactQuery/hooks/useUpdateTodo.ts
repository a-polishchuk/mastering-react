import { Todo } from '8-DataFetching/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from '../api/axiosInstance';
import { QueryKeyFactory, Queries } from '../api/QueryKeyFactory';

export function useUpdateTodo() {
    const queryClient = useQueryClient();
    const buildTodoListKey = QueryKeyFactory[Queries.TODO_LIST];

    return useMutation({
        mutationKey: ['updateTodo'],
        mutationFn: async (todo: Todo): Promise<Todo> => {
            const response = await axiosInstance.put(`todos/${todo.id}`, todo);
            return response.data;
        },
        onSuccess: (updatedTodo) => {
            queryClient.setQueryData(
                buildTodoListKey(updatedTodo.userId),
                (oldData: Todo[] | undefined) => {
                    if (!oldData) {
                        return oldData;
                    }
                    return oldData.map((todo) => {
                        if (todo.id === updatedTodo.id) {
                            return updatedTodo;
                        }
                        return todo;
                    });
                },
            );

            // queryClient.invalidateQueries({
            //     queryKey: QueryKeyFactory[Queries.TODO_LIST](updatedTodo.userId),
            // });
        },
    });
}
