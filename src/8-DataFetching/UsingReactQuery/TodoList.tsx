import { Button } from 'components';

import { useTodoList } from './hooks/useTodoList';

export function TodoList(): JSX.Element {
  const { data, refetch } = useTodoList();

  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2} style={{ fontSize: 24 }}>
            Todos List
          </th>
          <th>
            <Button text="Refresh" onClick={() => refetch()} />
          </th>
        </tr>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((todo, index) => (
          <tr key={todo.id}>
            <td>{index + 1}</td>
            <td>{todo.title}</td>
            <td>{todo.completed && '✅'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
