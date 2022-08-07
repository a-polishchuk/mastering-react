import { useInterval } from 'hooks/useInterval';
import { CSSProperties, useEffect, useState } from 'react';

function getRandomPosition(): number {
  return 10 + Math.random() * 80;
}

function buildStyle(position: number, visible: boolean): CSSProperties {
  return {
    fontSize: 28,
    position: 'absolute',
    transition: 'opacity 1s ease-in-out',
    pointerEvents: 'none',
    cursor: 'default',
    opacity: visible ? 1 : 0,
    left: `${position}%`,
    bottom: 0,
    transform: 'translate(-50%, 0%)',
  };
}

const SHOW_TIME = 3 * 1000;
const PAUSE_TIME = 20 * 1000;

export function EasterEgg() {
  const [visible, setVisible] = useState<boolean>(true);
  const [position, setPosition] = useState<number>(getRandomPosition());

  useEffect(() => {
    setVisible(true);
    const timeoutId = setTimeout(() => setVisible(false), SHOW_TIME);
    return () => clearTimeout(timeoutId);
  }, [position]);

  useInterval(() => {
    setPosition(getRandomPosition());
  }, PAUSE_TIME);

  return <div style={buildStyle(position, visible)}>👽</div>;
}
