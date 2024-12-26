import classes from './EmojiToggle.module.css';

interface Props {
  emojiOn: string;
  emojiOff: string;
  value: boolean;
  toggle: () => void;
}

export function EmojiToggle(props: Props) {
  const { emojiOn, emojiOff, value, toggle } = props;

  return (
    <div className={classes.emoji} onClick={() => toggle()}>
      {value ? emojiOn : emojiOff}
    </div>
  );
}
