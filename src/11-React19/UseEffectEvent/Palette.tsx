import { cn } from 'utils/cn';
import classes from './Palette.module.css';

export function Palette({
    selectedColor,
    onColorChange,
}: {
    selectedColor: Color;
    onColorChange: (color: Color) => void;
}) {
    return (
        <div className={classes.container}>
            {COLORS.map((color) => (
                <div
                    key={color}
                    onClick={() => onColorChange(color)}
                    className={cn(classes.colorItem, selectedColor === color && classes.selected)}
                    style={{ backgroundColor: color }}
                />
            ))}
        </div>
    );
}

export const COLORS = [
    'aqua',
    'coral',
    'crimson',
    'gold',
    'indigo',
    'lime',
    'magenta',
    'orange',
    'pink',
    'purple',
    'salmon',
    'teal',
] as const;

export type Color = (typeof COLORS)[number];
