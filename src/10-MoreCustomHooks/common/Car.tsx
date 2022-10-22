import { useInterval } from 'hooks/useInterval';
import { usePrevious } from 'hooks/usePrevious';
import { CSSProperties, useMemo, useState } from 'react';
import { getDistance, Position } from 'utils/geometry';

enum Direction {
  FORWARD,
  BACKWARD,
}

const INITIAL_DELAY = 1000;

interface Props {
  path: (Position | null)[];
}

export function Car({ path }: Props): JSX.Element | null {
  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState<Direction>(Direction.FORWARD);

  const prevIndex = usePrevious(index);
  const positions = path.filter((item) => !!item) as Position[];

  const prevPosition = positions[prevIndex ?? 0];
  const position = positions[index];
  const distance = prevPosition && position ? getDistance(prevPosition, position) : 0;
  const time = distance / 300;

  const style: CSSProperties = useMemo(
    () => ({
      position: 'absolute',
      left: position?.x,
      top: position?.y,
      fontSize: 36,
      transition: `all ${time}s linear`,
      transform: 'translate(-50%, -50%)',
    }),
    [time, position]
  );

  useInterval(() => {
    if (positions.length < 2) {
      return;
    }
    const lastIndex = positions.length - 1;
    if (direction === Direction.FORWARD) {
      if (index < lastIndex) {
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
  }, time * 1000 || INITIAL_DELAY);

  return positions.length >= 2 ? <div style={style}>🚘</div> : null;
}
