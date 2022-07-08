import classes from './index.module.css';

export interface ValueLabelProps {
  value: string | number;
}

export function ValueLabel({ value }: ValueLabelProps): JSX.Element {
  return <div className={classes.valueLabel}>{value}</div>;
}
