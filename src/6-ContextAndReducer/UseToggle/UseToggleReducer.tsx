import { ChapterHeader } from 'components/ChapterHeader';
import { Toolbar } from 'components/Toolbar';
import { useToggle } from 'hooks/useToggle';

import { EmojiToggle } from './EmojiToggle';

export function UseToggleReducer(): JSX.Element {
  const [isHappy, toggleHappy] = useToggle(true);
  const [isOk, toggleOk] = useToggle(true);
  const [isDay, toggleDay] = useToggle(false);

  return (
    <>
      <ChapterHeader title="useReducer" subtitle="useToggle" />

      <Toolbar>
        <EmojiToggle emojiOn="😊" emojiOff="😢" value={isHappy} toggle={toggleHappy} />
        <EmojiToggle emojiOn="👍" emojiOff="👎" value={isOk} toggle={toggleOk} />
        <EmojiToggle emojiOn="🌞" emojiOff="🌚" value={isDay} toggle={toggleDay} />
      </Toolbar>
    </>
  );
}
