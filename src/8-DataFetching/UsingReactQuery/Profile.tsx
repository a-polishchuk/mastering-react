import { LoadingSpinner, PropsTable } from 'components';
import { useUser } from './hooks/useUser';
import classes from './Profile.module.css';

export function Profile() {
    const { isLoading, data, error } = useUser();

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <div className={classes.error}>Oops! Something went wrong...</div>;
    }

    return <PropsTable data={data} />;
}
