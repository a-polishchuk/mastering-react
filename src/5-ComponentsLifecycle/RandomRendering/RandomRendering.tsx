import { ChapterWrapper } from 'components';
import { useRerender } from 'hooks/useRerender';

import { Child } from './Child';
import { RandomContainer } from './RandomContainer';

const EMOJIS = ['🏍', '✈️', '🚀', '🏎'];

export function RandomRendering(): JSX.Element {
  return (
    <ChapterWrapper
      title="Components lifecycle"
      subtitle="Random container"
      rerender={useRerender()}
    >
      <RandomContainer>
        {EMOJIS.map((emoji) => (
          <Child key={emoji} tag={emoji} />
        ))}
      </RandomContainer>
    </ChapterWrapper>
  );
}
