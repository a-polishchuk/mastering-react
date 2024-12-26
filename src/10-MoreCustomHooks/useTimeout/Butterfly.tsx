import { useInterval } from 'hooks/useInterval';
import { useToggle } from 'hooks/useToggle';
import { CSSProperties, useEffect, useState } from 'react';
import { Position } from 'utils/geometry';
import { Creature } from './Creature';
import { generateRandomPosition } from './generateRandomPosition';

type Props = {
  creature: Creature;
};

export function Butterfly({ creature }: Props) {
  const [position, setPosition] = useState<Position>(creature.position);
  const [toggled, toggle] = useToggle(false);
  const angle = toggled ? 20 : -20;

  useEffect(() => setPosition(generateRandomPosition()), []);

  useInterval(() => setPosition(generateRandomPosition()), 5000);

  useInterval(toggle, 100);

  const style: CSSProperties = {
    position: 'absolute',
    left: `${position.x}%`,
    top: `${position.y}%`,
    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
    cursor: 'default',
    transition: 'transform 0.1s ease-in-out, left 5s linear, top 5s linear',
  };

  return <div style={style}>🦋</div>;
}
