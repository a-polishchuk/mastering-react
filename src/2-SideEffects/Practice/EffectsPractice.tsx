import { EmojiNumberedList } from '9-DesignPatters/CompoundComponent/EmojiNumberedList';
import { TextBlock } from 'components';
import { useState } from 'react';

import { Car } from './Car';

export function EffectsPractice(): JSX.Element {
  // const [score, setScore] = useState<number>(0);

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <div style={{ borderBottom: '2px solid gray', height: '70%', position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: 0, left: '20%' }}>
          <Car color="orange" isMoving={true} />
        </div>
        <div style={{ position: 'absolute', bottom: 0, right: '20%' }}>
          <Car color="lime" isMoving={false} />
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        <TextBlock>🛠 TODO: finish the game.</TextBlock>
        <EmojiNumberedList>
          <span>
            Car should jump by pressing <code>space</code>
          </span>
          <span>
            New obstacle should be spawned <strong>every 3-6 seconds</strong>
          </span>
          <span>
            Each spawned obstacle should <strong>add 20 points</strong> to current score
          </span>
        </EmojiNumberedList>
      </div>
    </div>
  );
}
