export interface Position {
  x: number;
  y: number;
}

export function getMiddle(a: Position, b: Position): Position {
  return {
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2,
  };
}

export function getAngle(a: Position, b: Position): number {
  return Math.atan2(b.y - a.y, b.x - a.x);
}

export function getDistance(a: Position | undefined, b: Position | undefined): number {
  if (!a || !b) {
    return 0;
  }
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
