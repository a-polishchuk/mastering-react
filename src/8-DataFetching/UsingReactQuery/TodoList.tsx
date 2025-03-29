import { Todo } from '8-DataFetching/types';
import { EmojiButton, LoadingSpinner } from 'components';
import { useTodoList } from './hooks/useTodoList';
import { useUpdateTodo } from './hooks/useUpdateTodo';

export function TodoList() {
    const { data, isLoading, refetch } = useTodoList();
    const { mutate: updateTodo } = useUpdateTodo();

    if (isLoading) {
        return <LoadingSpinner />;
    }

    const toggleCompleted = (todo: Todo) => {
        updateTodo({
            ...todo,
            completed: !todo.completed,
        });
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <EmojiButton emoji="🔄" tooltip="Refetch" onClick={() => refetch()} />
                    </th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((todo, index) => (
                    <tr key={todo.id}>
                        <td>{index + 1}</td>
                        <td>{todo.title}</td>
                        <td style={{ cursor: 'pointer' }} onClick={() => toggleCompleted(todo)}>
                            {todo.completed ? '✅' : null}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
