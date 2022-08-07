import { useTodoList } from '../hooks/useTodoList';
import classes from './TodoCounter.module.css';

export function TodoCounter(): JSX.Element {
  const { data } = useTodoList();
  const todoCount = data?.length ?? 0;

  return (
    <div className={classes.todoCounter}>
      Todos:
      <br />
      <strong>{todoCount}</strong>
    </div>
  );
}
