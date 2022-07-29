import { ReactNode } from 'react';

import classes from './Toolbar.module.css';

export interface ToolbarProps {
  children: ReactNode;
}

export function Toolbar({ children }: ToolbarProps): JSX.Element {
  return <div className={classes.toolbar}>{children}</div>;
}
