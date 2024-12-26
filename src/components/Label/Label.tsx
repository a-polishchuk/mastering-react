import classes from './Label.module.css';

export interface LabelProps {
  text: string;
  minWidth?: number;
}

export function Label({ text, minWidth = 150 }: LabelProps) {
  return (
    <div className={classes.label} style={{ minWidth }}>
      {text}
    </div>
  );
}
