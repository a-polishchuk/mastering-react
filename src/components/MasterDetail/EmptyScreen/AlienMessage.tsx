import { ColoredBlock } from 'components/ColoredBlock';
import { format } from 'date-fns';
import { CSSProperties } from 'react';

import classes from './AlienMessage.module.css';
import { Message } from './types';

const TIME_FORMAT = 'HH:mm';

function buildAvatarStyle(color: string): CSSProperties {
  return {
    textShadow: `2px 2px ${color + '66'}`,
  };
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

interface Props {
  color: string;
  message: Message;
}

export function AlienMessage({ color, message }: Props): JSX.Element {
  const { text, dateTime } = message;

  return (
    <div className={classes.emptyScreenMessage}>
      <div className={classes.emptyScreenAvatar} style={buildAvatarStyle(color)}>
        👽
      </div>
      <ColoredBlock style={buildBlockStyle(color)}>{text}</ColoredBlock>
      {dateTime && (
        <div className={classes.emptyScreenTimestamp}>{format(dateTime, TIME_FORMAT)}</div>
      )}
    </div>
  );
}
