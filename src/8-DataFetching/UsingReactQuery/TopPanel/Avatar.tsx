import { useUser } from '../hooks/useUser';
import classes from './Avatar.module.css';

function useUserInitials(): string {
  const { data } = useUser();
  const userName = data?.name ?? '';

  return userName
    .split(' ')
    .map((w) => w.charAt(0))
    .join('');
}

export function Avatar() {
  const initials = useUserInitials();

  return <div className={classes.avatar}>{initials}</div>;
}
