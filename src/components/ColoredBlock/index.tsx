import { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { getRandomColor } from 'utils/getRandomColor';

import classes from './index.module.css';

export interface ColoredBlockProps {
  children: ReactNode;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export function ColoredBlock({ children, style, onClick }: ColoredBlockProps): JSX.Element {
  const composedStyle: CSSProperties = {
    backgroundColor: getRandomColor(),
    ...style,
  };

  return (
    <div className={classes.coloredBlock} style={composedStyle} onClick={onClick}>
      {children}
    </div>
  );
}
