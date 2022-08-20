import { useMemo } from 'react';
import { generateRandomColor } from 'utils/generateRandomColor';
import { generateUniqueId } from 'utils/generateUniqueId';

import { AlienMessage } from './AlienMessage';
import { Background } from './Background';
import { DotsMessage } from './DotsMessage';
import classes from './EmptyScreen.module.css';
import { Message } from './types';
import { useDotsVisible } from './useDotsVisible';

const MESSAGES_TEXT = [
  'Вітаю, homo sapiens!',
  'Тут ти зможеш знайти всі приклади з курсу "Опановуємо React"',
  'Просто натисни на потрібний розділ в меню ліворуч',
];

export function EmptyScreen(): JSX.Element {
  const isDotsVisible = useDotsVisible();

  const messageColor = useMemo(() => generateRandomColor(), []);

  const messages: Message[] = useMemo(
    () =>
      MESSAGES_TEXT.map((text) => ({
        id: generateUniqueId(),
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
