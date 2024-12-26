import { CSSProperties, memo } from 'react';
import { Position } from 'utils/geometry';

import classes from './Circle.module.css';

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
  opacity?: number;
}

export const Circle = memo(({ position, color, opacity }: CircleProps) => {
  const style: CSSProperties = {
    left: position.x,
    top: position.y,
    opacity,
  };

  return (
    <div className={classes.circle} style={style}>
      {color}
    </div>
  );
});

export function mapToCircle(positions: (Position | null)[], color: CircleColor, opacity?: number) {
  return positions.map(
    (position, index) =>
      position && <Circle key={index} position={position} color={color} opacity={opacity} />
  );
}
