import { ReactNode } from 'react';

import classes from './TextBlock.module.css';

export function TextBlock({ children }: { children: ReactNode }): JSX.Element {
  return <div className={classes.textBlock}>{children}</div>;
}
