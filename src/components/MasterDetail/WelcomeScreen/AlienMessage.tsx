import { ColoredBlock } from 'components';
import { format } from 'date-fns';
import { useHovered } from 'hooks/useHovered';
import { CSSProperties } from 'react';

import { AlienAvatar } from './AlienAvatar';
import classes from './AlienMessage.module.css';
import { Message } from './types';

const TIME_FORMAT = 'HH:mm';

interface Props {
  color: string;
  message: Message;
}

export function AlienMessage({ color, message }: Props): JSX.Element {
  const { text, dateTime } = message;
  const [hovered, refCallback] = useHovered();

  return (
    <div ref={refCallback} className={classes.emptyScreenMessage}>
      <AlienAvatar size={35} hovered={hovered} />
      <ColoredBlock style={buildBlockStyle(color)}>{text}</ColoredBlock>
      {dateTime && (
        <div className={classes.emptyScreenTimestamp}>{format(dateTime, TIME_FORMAT)}</div>
      )}
    </div>
  );
}

function buildBlockStyle(backgroundColor: string): CSSProperties {
  return {
    display: 'flex',
    padding: 10,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 20,
    minWidth: 50,
    backgroundColor,
  };
}
