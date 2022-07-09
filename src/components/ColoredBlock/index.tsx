import { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { generateRandomColor } from 'utils/generateRandomColor';

import classes from './index.module.css';

export interface ColoredBlockProps {
  children: ReactNode;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export function ColoredBlock({ children, style, onClick }: ColoredBlockProps): JSX.Element {
  const composedStyle: CSSProperties = {
    backgroundColor: generateRandomColor(),
    ...style,
  };

  return (
    <div className={classes.coloredBlock} style={composedStyle} onClick={onClick}>
      {children}
    </div>
  );
}
