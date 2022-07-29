import { Toolbar } from 'components';
import { ChangeEventHandler, useState } from 'react';

import { AnimatedEmoji } from './AnimatedEmoji';

const DEFAULT_DELAY = 500;
const MIN_DELAY = 100;

export function EmojiSection({ emojis }: { emojis: string[] }): JSX.Element {
  const [delay, setDelay] = useState<number>(DEFAULT_DELAY);

  const handleDelayChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const stringValue = event.target.value || '0';
    const newDelay = Math.max(parseInt(stringValue), MIN_DELAY);
    setDelay(newDelay);
  };

  return (
    <Toolbar>
      <AnimatedEmoji emojis={emojis} delay={delay} fontSize={64} />
      <input type="number" value={delay} onChange={handleDelayChange} />
    </Toolbar>
  );
}
