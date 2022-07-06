import { CSSProperties, ReactNode } from 'react';
import { getRandomColor } from 'utils/getRandomColor';

import classes from './index.module.css';

export interface ColoredBlockProps {
  children: ReactNode;
  style?: CSSProperties;
}

export function ColoredBlock({ children, style }: ColoredBlockProps): JSX.Element {
  const composedStyle: CSSProperties = {
    backgroundColor: getRandomColor(),
    ...style,
  };

  return (
    <div className={classes.coloredBlock} style={composedStyle}>
      {children}
    </div>
  );
}
