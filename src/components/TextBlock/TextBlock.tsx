import classes from './TextBlock.module.css';
import { ReactNode } from 'react';

export type TextBlockProps = {
  children: ReactNode;
};

export function TextBlock({ children }: TextBlockProps) {
  return <div className={classes.textBlock}>{children}</div>;
}
