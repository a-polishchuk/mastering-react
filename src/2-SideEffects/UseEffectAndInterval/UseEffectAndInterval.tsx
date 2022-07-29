import { ChapterHeader } from 'components';

import { EmojiSection } from './EmojiSection';

const MOON_EMOJIS = ['🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔'];
const EARTH_EMOJIS = ['🌎', '🌍', '🌏'];
const CLOCK_EMOJIS = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛'];

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
