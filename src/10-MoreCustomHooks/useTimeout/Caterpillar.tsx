import { useInterval } from 'hooks/useInterval';
import { useToggle } from 'hooks/useToggle';
import { CSSProperties, useMemo } from 'react';
import { generateRandomNumber } from 'utils/generateRandomNumber';

import { Creature } from './Creature';

interface Props {
  creature: Creature;
  onClick: (creature: Creature) => void;
}

export function Caterpillar({ creature, onClick }: Props) {
  const { x, y } = creature.position;
  const [toggled, toggle] = useToggle(false);
  const toggleDelay = useMemo(() => generateRandomNumber(500, 3000), []);

  useInterval(toggle, toggleDelay);

  const style: CSSProperties = {
    position: 'absolute',
    left: `${x}%`,
    top: `${y}%`,
    transform: `translate(-50%, -50%) scaleX(${toggled ? -1 : 1})`,
    cursor: 'default',
    transition: 'all 0.3s ease-in-out',
  };

  return (
    <div style={style} onClick={() => onClick(creature)}>
      🐛
    </div>
  );
}
