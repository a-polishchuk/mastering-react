import { CSSProperties } from 'react';

import { Position } from './Position';

interface Props {
  from: Position;
  to: Position;
}

export function Line({ from, to }: Props): JSX.Element {
  const center = getMiddle(from, to);
  const angle = getAngle(from, to);

  const style: CSSProperties = {
    pointerEvents: 'none',
    position: 'absolute',
    height: '2px',
    border: '1px dashed #0003',
    width: getDistance(from, to),
    left: center.x,
    top: center.y,
    transform: `translate(-50%, -50%) rotate(${angle}rad)`,
  };

  return <div style={style} />;
}

function getMiddle(a: Position, b: Position): Position {
  return {
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2,
  };
}

function getAngle(a: Position, b: Position): number {
  return Math.atan2(b.y - a.y, b.x - a.x);
}

function getDistance(a: Position, b: Position): number {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

export function mapToLine(positions: Position[]) {
  return positions.map((position, index, array) => {
    const isNotLast = index < array.length - 1;
    return isNotLast ? <Line from={position} to={array[index + 1]} /> : null;
  });
}
