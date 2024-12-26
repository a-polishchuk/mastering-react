import classes from './Label.module.css';

export type LabelProps = {
  text: string;
  minWidth?: number;
};

export function Label({ text, minWidth = 150 }: LabelProps) {
  return (
    <div className={classes.label} style={{ minWidth }}>
      {text}
    </div>
  );
}
