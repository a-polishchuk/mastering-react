import { useReducer } from 'react';
import classes from './ClicksCounter.module.css';

export function ClicksCounter() {
    const [clicks, increment] = useReducer((val) => val + 1, 0);

    return (
        <div className={classes.clicks} onClick={() => increment()}>
            Clicks: <b>{clicks}</b>
        </div>
    );
}
