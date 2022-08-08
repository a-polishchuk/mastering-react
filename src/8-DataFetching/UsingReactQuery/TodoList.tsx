import { Todo } from '8-DataFetching/types';
import { Button } from 'components';

import { useTodoList } from '../hooks/useTodoList';

interface TodoRowProps {
  number: number;
  data: Todo;
}

function TodoRow({ number, data }: TodoRowProps): JSX.Element {
  const { title, completed } = data;
  return (
    <tr>
      <td>{number}</td>
      <td>{title}</td>
      <td>{completed && '✅'}</td>
    </tr>
  );
}

export function TodoList(): JSX.Element {
  const { data, refetch } = useTodoList();
  const todos = data || [];

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
        {todos.map((todo, index) => (
          <TodoRow key={todo.id} number={index + 1} data={todo} />
        ))}
      </tbody>
    </table>
  );
}
