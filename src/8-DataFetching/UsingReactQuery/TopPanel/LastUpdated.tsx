import { useLastUpdated } from '../hooks/useLastUpdated';
import classes from './LastUpdated.module.css';

export function LastUpdated() {
    const { data } = useLastUpdated();
    const formattedTime = data?.toLocaleTimeString() ?? '--';

    return (
        <div className={classes.lastUpdated}>
            Last updated:
            <br />
            <strong>{formattedTime}</strong>
        </div>
    );
}
