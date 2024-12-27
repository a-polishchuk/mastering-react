import classes from './ValueLabel.module.css';

export type ValueLabelProps = {
    value: string | number;
    minWidth?: string | number;
};

export function ValueLabel({ value, minWidth }: ValueLabelProps) {
    return (
        <div className={classes.valueLabel} style={{ minWidth }}>
            {value}
        </div>
    );
}
