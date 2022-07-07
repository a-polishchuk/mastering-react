import { useMemo } from 'react';
import { getRandomColor } from 'utils/getRandomColor';
import { v4 as uuidv4 } from 'uuid';

import { AlienMessage } from './AlienMessage';
import { Background } from './Background';
import { DotsMessage } from './DotsMessage';
import classes from './EmptyScreen.module.css';
import { Message } from './types';
import { useDotsVisible } from './useDotsVisible';

const MESSAGES_TEXT = [
  'Greetings, human!',
  'Welcome to the "React Hooks in details" course',
  'Please select some chapter in the left menu',
];

export function EmptyScreen(): JSX.Element {
  const isDotsVisible = useDotsVisible();

  const messageColor = useMemo(() => getRandomColor(), []);

  const messages: Message[] = useMemo(
    () =>
      MESSAGES_TEXT.map((text) => ({
        id: uuidv4(),
        text,
        dateTime: new Date(),
      })),
    []
  );

  return (
    <div className={classes.emptyScreen}>
      <Background logosNumber={3} />
      <div className={classes.emptyScreenMessages}>
        {messages.map((message) => (
          <AlienMessage key={message.id} color={messageColor} message={message} />
        ))}
        {isDotsVisible && <DotsMessage color={messageColor} />}
      </div>
    </div>
  );
}
