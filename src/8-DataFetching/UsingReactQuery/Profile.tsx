import { LoadingSpinner, PropsTable } from 'components';

import { useUser } from './hooks/useUser';
import classes from './Profile.module.css';

export function Profile(): JSX.Element {
  const { isLoading, data, error } = useUser();

  if (isLoading) {
    return (
      <div className={classes.loading}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className={classes.error}>Oops! Something went wrong...</div>;
  }

  return <PropsTable title="User Profile" data={data} />;
}
