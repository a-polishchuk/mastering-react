import { CSSProperties, ReactNode } from 'react';
import { cn } from 'utils/cn';
import classes from './TextBlock.module.css';

export type TextBlockProps = {
    children: ReactNode;
    type?: 'default' | 'info' | 'success' | 'warning' | 'error';
    className?: string;
    style?: CSSProperties;
};

export function TextBlock({ children, type = 'default', className, style }: TextBlockProps) {
    return (
        <div className={cn(classes.textBlock, classes[type], className)} style={style}>
            {children}
        </div>
    );
}
