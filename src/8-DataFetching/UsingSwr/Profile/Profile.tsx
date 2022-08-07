import { PropsTable } from 'components';

import { useUser } from '../hooks/useUser';
import classes from './Profile.module.css';

export function Profile(): JSX.Element {
  const { loading, data, error } = useUser();

  if (loading) {
    return <div className={classes.profile}>Loading...</div>;
  }

  if (error) {
    return (
      <div className={classes.profile}>
        <div className={classes.error}>Oops! Something went wrong...</div>
      </div>
    );
  }

  return <PropsTable title="User Profile" data={data} />;
}
