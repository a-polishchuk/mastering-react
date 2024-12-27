import { useUser } from '../hooks/useUser';
import classes from './UserName.module.css';

export function UserName() {
    const { data } = useUser();

    return (
        <>
            <div className={classes.userName}>{data?.name}</div>
            <div className={classes.userEmail}>{data?.email}</div>
        </>
    );
}
