import { useInterval } from 'hooks/useInterval';
import { useToggle } from 'hooks/useToggle';
import { useMemo } from 'react';
import { generateRandomColor } from 'utils/generateRandomColor';
import { generateUniqueId } from 'utils/generateUniqueId';

import { AlienMessage } from './AlienMessage';
import { Background } from './Background';
import { DotsMessage } from './DotsMessage';
import { Message } from './types';
import classes from './WelcomeScreen.module.css';

const MESSAGES_TEXT = [
  'Вітаю, homo sapiens!',
  'Тут ти зможеш знайти всі приклади з курсу "Опановуємо React"',
  'Просто натисни на потрібний розділ в меню ліворуч',
];

export function WelcomeScreen(): JSX.Element {
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
    <div className={classes.container}>
      <Background />
      <div className={classes.messages}>
        {messages.map((message) => (
          <AlienMessage key={message.id} color={messageColor} message={message} />
        ))}
        {isDotsVisible && <DotsMessage color={messageColor} />}
      </div>
    </div>
  );
}

function useDotsVisible() {
  const [dotsVisible, toggle] = useToggle(false);
  useInterval(toggle, 3000);
  return dotsVisible;
}
