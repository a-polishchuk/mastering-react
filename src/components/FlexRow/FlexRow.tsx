import { ReactNode } from 'react';

import classes from './FlexRow.module.css';

export function FlexRow({ children }: { children: ReactNode }): JSX.Element {
  return <div className={classes.flexRow}>{children}</div>;
}
