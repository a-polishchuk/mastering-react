import { ButtonHTMLAttributes } from 'react';
import classes from './Button.module.css';

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    text: string;
};

// TODO: check about class names library
export function Button({ text, className, ...restProps }: ButtonProps) {
    return (
        <button className={`${classes.button} ${className ?? ''}`} {...restProps}>
            {text}
        </button>
    );
}
