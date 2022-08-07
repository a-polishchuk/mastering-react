import { Avatar } from './Avatar';
import { LastUpdated } from './LastUpdated';
import { RefreshAll } from './RefreshAll';
import { TodoCounter } from './TodoCounter';
import classes from './TopPanel.module.css';
import { UserName } from './UserName';

export function TopPanel(): JSX.Element {
  return (
    <div className={classes.topPanel}>
      <Avatar />
      <div className={classes.flex1}>
        <UserName />
      </div>
      <TodoCounter />
      <LastUpdated />
      <RefreshAll />
    </div>
  );
}
