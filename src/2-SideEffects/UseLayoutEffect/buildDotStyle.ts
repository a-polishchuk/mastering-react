import { CSSProperties } from 'react';

import { Position } from './Position';

export function buildDotStyle(position: Position, color: string, size: number): CSSProperties {
  const { x, y } = position;

  return {
    position: 'absolute',
    left: x,
    top: y,
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: color,
    transform: 'translate(-50%, -50%)',
  };
}
