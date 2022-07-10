import { Toolbar } from 'components/Toolbar';

import classes from './EmojisBar.module.css';

interface Props {
  emojis: string[];
  onClick: (emoji: string) => void;
}

export function EmojisBar({ emojis, onClick }: Props): JSX.Element {
  return (
    <Toolbar>
      {emojis.map((emoji) => (
        <div key={emoji} className={classes.animalEmoji} onClick={() => onClick(emoji)}>
          {emoji}
        </div>
      ))}
    </Toolbar>
  );
}
