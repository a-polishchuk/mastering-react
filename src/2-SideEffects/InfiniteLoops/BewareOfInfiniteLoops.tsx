import { ChapterHeader } from 'components';
import { useEffect, useState } from 'react';

import { EmojisBar } from './EmojisBar';

const EMOJIS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐻‍❄️', '🐨'];

export function BewareOfInfiniteLoops(): JSX.Element {
  const [topEmojis, setTopEmojis] = useState<string[]>(EMOJIS);
  const [bottomEmojis, setBottomEmojis] = useState<string[]>([]);

  const addToBottom = (emoji: string) => {
    setBottomEmojis((array) => [...array, emoji]);
  };

  const addToTop = (emoji: string) => {
    setTopEmojis((array) => [...array, emoji]);
  };

  // ! these two effects will trigger an infinite update loop
  useEffect(() => {
    setTopEmojis((array) => array.filter((emoji) => !bottomEmojis.includes(emoji)));
  }, [bottomEmojis]);

  useEffect(() => {
    setBottomEmojis((array) => array.filter((emoji) => !topEmojis.includes(emoji)));
  }, [topEmojis]);

  return (
    <>
      <ChapterHeader title="useEffect" subtitle="Beware of infinite loops" />
      <EmojisBar emojis={topEmojis} onClick={addToBottom} />
      <EmojisBar emojis={bottomEmojis} onClick={addToTop} />
    </>
  );
}
