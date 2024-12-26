import { CSSProperties, useState } from 'react';
import { useInterval } from 'hooks/useInterval';
import { getDistance, Position } from 'utils/geometry';

enum Direction {
  FORWARD,
  BACKWARD,
}

const INITIAL_DELAY = 1000;

type Props = {
  path: (Position | null)[];
};

export function Car({ path }: Props) {
  const [prevIndex, setPrevIndex] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState<Direction>(Direction.FORWARD);

  const positions = path.filter((item) => !!item) as Position[];
  const position = positions[index];
  const distance = getDistance(positions[prevIndex], position);
  const timeSeconds = distance / 300;
  const intervalDelay = positions.length >= 2 ? timeSeconds * 1000 || INITIAL_DELAY : null;

  const style: CSSProperties = {
    position: 'absolute',
    left: position?.x,
    top: position?.y,
    fontSize: 36,
    transition: `all ${timeSeconds}s linear`,
    transform: 'translate(-50%, -50%)',
  };

  useInterval(() => {
    setPrevIndex(index);
    if (direction === Direction.FORWARD) {
      if (index < positions.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(index - 1);
        setDirection(Direction.BACKWARD);
      }
    } else {
      if (index > 0) {
        setIndex(index - 1);
      } else {
        setIndex(index + 1);
        setDirection(Direction.FORWARD);
      }
    }
  }, intervalDelay);

  return positions.length >= 2 ? <div style={style}>🚘</div> : null;
}
