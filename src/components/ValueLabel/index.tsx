import classes from './index.module.css';

export interface ValueLabelProps {
  value: string | number;
  minWidth?: string | number;
}

export function ValueLabel({ value, minWidth }: ValueLabelProps): JSX.Element {
  return (
    <div className={classes.valueLabel} style={{ minWidth }}>
      {value}
    </div>
  );
}
