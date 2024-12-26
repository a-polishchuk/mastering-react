import { ReactNode } from 'react';
import classes from './FlexRow.module.css';

export function FlexRow({ children }: { children: ReactNode }) {
  return <div className={classes.flexRow}>{children}</div>;
}
