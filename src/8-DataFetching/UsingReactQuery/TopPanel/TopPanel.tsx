import { Avatar } from './Avatar';
import { LastUpdated } from './LastUpdated';
import { RefreshAll } from './RefreshAll';
import { TodoCounter } from './TodoCounter';
import classes from './TopPanel.module.css';
import { UserName } from './UserName';

export function TopPanel(): JSX.Element {
  return (
    <div className={classes.topPanel}>
      <div className={classes.avatarContainer}>
        <Avatar />
      </div>
      <div className={classes.userNameContainer}>
        <UserName />
      </div>
      <div className={classes.widgetContainer}>
        <TodoCounter />
      </div>
      <div className={classes.widgetContainer}>
        <LastUpdated />
      </div>
      <div className={classes.widgetContainer}>
        <RefreshAll />
      </div>
    </div>
  );
}
