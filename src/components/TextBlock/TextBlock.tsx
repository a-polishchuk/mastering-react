import { CSSProperties, ReactNode } from 'react';
import { cn } from 'utils/cn';
import classes from './TextBlock.module.css';

export type TextBlockProps = {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
};

export function TextBlock({ children, className, style }: TextBlockProps) {
    return (
        <div className={cn(classes.textBlock, className)} style={style}>
            {children}
        </div>
    );
}
