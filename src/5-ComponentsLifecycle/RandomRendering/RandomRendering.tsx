import { Button } from 'components';
import { ChapterHeader } from 'components/ChapterHeader';
import { Toolbar } from 'components/Toolbar';
import { useRerender } from 'hooks/useRerender';

import { Child } from './Child';
import { RandomContainer } from './RandomContainer';

const EMOJIS = ['🏍', '✈️', '🚀', '🏎'];

export function RandomRendering(): JSX.Element {
  const rerender = useRerender();

  return (
    <>
      <ChapterHeader title="Components lifecycle" subtitle="Random container" />

      <Toolbar>
        <Button text="Click me to trigger new render" onClick={rerender} />
      </Toolbar>

      <RandomContainer>
        {EMOJIS.map((emoji) => (
          <Child key={emoji} tag={emoji} />
        ))}
      </RandomContainer>
    </>
  );
}
