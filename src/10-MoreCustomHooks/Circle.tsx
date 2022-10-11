import { CSSProperties } from 'react';

import classes from './Circle.module.css';
import { Position } from './Position';

export enum CircleColor {
  RED = '🔴',
  ORANGE = '🟠',
  YELLOW = '🟡',
  GREEN = '🟢',
  BLUE = '🔵',
  VIOLET = '🟣',
  BLACK = '⚫️',
}

interface CircleProps {
  position: Position;
  color: CircleColor;
}

export function Circle({ position, color }: CircleProps): JSX.Element {
  const style: CSSProperties = {
    left: position.x,
    top: position.y,
  };

  return (
    <div className={classes.circle} style={style}>
      {color}
    </div>
  );
}

export function mapToCircle(positions: (Position | null)[], color: CircleColor) {
  return positions.map(
    (position, index) => position && <Circle key={index} position={position} color={color} />
  );
}
