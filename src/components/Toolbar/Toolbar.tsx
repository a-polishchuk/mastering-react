import classes from './Toolbar.module.css';
import { ReactNode } from 'react';

export type ToolbarProps = {
  children: ReactNode;
};

export function Toolbar({ children }: ToolbarProps) {
  return <div className={classes.toolbar}>{children}</div>;
}
