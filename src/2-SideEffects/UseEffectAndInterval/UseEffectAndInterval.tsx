import { ChapterHeader } from 'components/ChapterHeader';

import { EmojiSection } from './EmojiSection';

const MOON_EMOJIS = ['🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔'];
const EARTH_EMOJIS = ['🌎', '🌍', '🌏'];
const CLOCK_EMOJIS = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛'];

// TODO: what about introducing useInterval hook?
export function UseEffectAndInterval(): JSX.Element {
  return (
    <>
      <ChapterHeader title="useEffect" subtitle="useEffect + setInterval" />
      <EmojiSection emojis={MOON_EMOJIS} />
      <EmojiSection emojis={EARTH_EMOJIS} />
      <EmojiSection emojis={CLOCK_EMOJIS} />
    </>
  );
}
