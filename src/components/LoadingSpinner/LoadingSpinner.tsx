import classes from './LoadingSpinner.module.css';

export function LoadingSpinner() {
    return (
        <div className={classes.loadingContainer}>
            <div className={classes.loadingSpinner}>⌛</div>
        </div>
    );
}
