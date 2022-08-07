import { Todo } from '8-DataFetching/types';
import { Button } from 'components';

import { useTodoList } from '../hooks/useTodoList';
import classes from './TodoList.module.css';

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
      <td>{completed && '\u{2705}'}</td>
    </tr>
  );
}

export function TodoList(): JSX.Element {
  const { data, mutate } = useTodoList();
  const todos = data || [];

  return (
    <table>
      <thead>
        <tr>
          <th className={classes.title} colSpan={2}>
            Todos List
          </th>
          <th>
            <Button text="Refresh" onClick={() => mutate()} />
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
