import classes from './index.module.css';

export function LoadingSpinner(): JSX.Element {
  return (
    <div className={classes.loadingContainer}>
      <div className={classes.loadingSpinner}>⌛</div>
    </div>
  );
}
