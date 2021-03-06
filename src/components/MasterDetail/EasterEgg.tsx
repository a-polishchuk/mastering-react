import { useInterval } from 'hooks/useInterval';
import { CSSProperties, useEffect, useState } from 'react';

enum Side {
  LEFT = 'left',
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
}

function getRandomSide(): Side {
  const randomIndex = Math.round(Math.random() * 3);
  switch (randomIndex) {
    case 0:
      return Side.LEFT;
    case 1:
      return Side.TOP;
    case 2:
      return Side.RIGHT;
    default:
      return Side.BOTTOM;
  }
}

function getRandomPosition(): number {
  return 10 + Math.random() * 80;
}

function buildSideStyle(position: number, side: Side): CSSProperties {
  switch (side) {
    case Side.LEFT:
      return {
        left: 0,
        top: `${position}%`,
        transform: 'translate(0%, -50%) rotate(90deg)',
      };
    case Side.TOP:
      return {
        left: `${position}%`,
        top: 0,
        transform: 'translate(-50%, 0%) rotate(180deg)',
      };
    case Side.RIGHT:
      return {
        right: 0,
        top: `${position}%`,
        transform: 'translate(0%, -50%) rotate(-90deg)',
      };
    case Side.BOTTOM:
      return {
        left: `${position}%`,
        bottom: 0,
        transform: 'translate(-50%, 0%)',
      };
  }
}

function buildStyle(position: number, side: Side, visible: boolean): CSSProperties {
  return {
    fontSize: 28,
    position: 'absolute',
    transition: 'opacity 1s ease-in-out',
    pointerEvents: 'none',
    cursor: 'default',
    opacity: visible ? 1 : 0,
    ...buildSideStyle(position, side),
  };
}

const SHOW_TIME = 3 * 1000;
const PAUSE_TIME = 20 * 1000;

// TODO: fix the layout problem when alien is visible
export function EasterEgg() {
  const [visible, setVisible] = useState<boolean>(true);
  const [side, setSide] = useState<Side>(getRandomSide());
  const [position, setPosition] = useState<number>(getRandomPosition());

  useEffect(() => {
    setVisible(true);
    const timeoutId = setTimeout(() => setVisible(false), SHOW_TIME);
    return () => clearTimeout(timeoutId);
  }, [position, side]);

  useInterval(() => {
    setPosition(getRandomPosition());
    setSide(getRandomSide());
  }, PAUSE_TIME);

  return <div style={buildStyle(position, side, visible)}>????</div>;
}
