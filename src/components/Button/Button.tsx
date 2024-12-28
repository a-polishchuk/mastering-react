import { ButtonHTMLAttributes } from 'react';
import { cn } from 'utils/cn';
import classes from './Button.module.css';

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    text: string;
};

export function Button({ text, className, ...restProps }: ButtonProps) {
    return (
        <button className={cn(classes.button, className)} {...restProps}>
            {text}
        </button>
    );
}
