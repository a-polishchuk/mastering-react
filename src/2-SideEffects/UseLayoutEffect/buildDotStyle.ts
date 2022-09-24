import { CSSProperties } from 'react';

import { Dot } from './Dot';

export function buildDotStyle({ x, y }: Dot, color: string, size: number): CSSProperties {
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
