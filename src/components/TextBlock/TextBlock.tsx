import { ReactNode } from 'react';

import classes from './TextBlock.module.css';

export interface TextBlockProps {
  children: ReactNode;
}

export function TextBlock({ children }: TextBlockProps): JSX.Element {
  return <div className={classes.textBlock}>{children}</div>;
}
