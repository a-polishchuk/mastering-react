import { Button, ChapterWrapper } from 'components';
import { useTimeout } from 'hooks/useTimeout';
import { useState } from 'react';
import { generateUniqueId } from 'utils/generateUniqueId';

import commonClasses from '../common/common.module.css';
import { Butterfly } from './Butterfly';
import { Caterpillar } from './Caterpillar';
import { Creature } from './Creature';
import { generateRandomPosition } from './generateRandomPosition';
import classes from './UseTimeouteExample.module.css';

const TARGETS_NUMBER = 10;
const PLAY_TIME = 10 * 1000;

export function UseTimeoutExample(): JSX.Element {
  const [caterpillars, setCaterpillars] = useState<Creature[]>(() =>
    generateRandomPositions(TARGETS_NUMBER)
  );
  const [butterflies, setButterflies] = useState<Creature[]>([]);
  const [isPlaying, setPlaying] = useState<boolean>(true);

  const onCaterpillarClick = (creature: Creature) => {
    setCaterpillars((array) => array.filter((c) => c.id !== creature.id));
    setButterflies((array) => [...array, creature]);
  };

  const { reschedule: rescheduleTimeout } = useTimeout(() => setPlaying(false), PLAY_TIME);

  const playAgain = () => {
    setCaterpillars(generateRandomPositions(TARGETS_NUMBER));
    setButterflies([]);
    setPlaying(true);
    rescheduleTimeout();
  };

  return (
    <ChapterWrapper title="useTimeout" subtitle="More custom hooks">
      {isPlaying ? (
        <div className={commonClasses.container} style={{ fontSize: 36, border: 'none' }}>
          {caterpillars.map((creature) => (
            <Caterpillar key={creature.id} creature={creature} onClick={onCaterpillarClick} />
          ))}
          {butterflies.map((creature) => (
            <Butterfly key={creature.id} creature={creature} />
          ))}
        </div>
      ) : (
        <div className={classes.gameOver}>
          Game over!
          <div>
            {butterflies.length + caterpillars.length} 🐛 ➡️ {butterflies.length} 🦋
          </div>
          <Button text="Play again" onClick={playAgain} />
        </div>
      )}
    </ChapterWrapper>
  );
}

function generateRandomPositions(n: number): Creature[] {
  const array = new Array<Creature>(n);
  for (let i = 0; i < n; i++) {
    array[i] = {
      id: generateUniqueId(),
      position: generateRandomPosition(),
    };
  }
  return array;
}
