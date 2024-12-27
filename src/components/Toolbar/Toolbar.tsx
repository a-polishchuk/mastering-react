import { ReactNode } from 'react';
import classes from './Toolbar.module.css';

export type ToolbarProps = {
    children: ReactNode;
};

export function Toolbar({ children }: ToolbarProps) {
    return <div className={classes.toolbar}>{children}</div>;
}
