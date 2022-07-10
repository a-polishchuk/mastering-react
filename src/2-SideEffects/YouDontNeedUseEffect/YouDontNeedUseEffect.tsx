import { Button } from 'components/Button';
import { ChapterHeader } from 'components/ChapterHeader';
import { Toolbar } from 'components/Toolbar';
import { useRerender } from 'hooks/useRerender';
import { CSSProperties } from 'react';

import { useBallPosition } from './useBallPosition';

const MIN_STEP = 20;
const MAX_STEP = 100;

function buildStyle(left: number, top: number): CSSProperties {
  return {
    position: 'absolute',
    fontSize: 64,
    transition: 'all 0.5s ease-in-out',
    transform: `rotate(${Math.random() * 360}deg)`,
    left,
    top,
  };
}

export function YouDontNeedUseEffect(): JSX.Element {
  const [left, top] = useBallPosition(MIN_STEP, MAX_STEP);
  const style = buildStyle(left, top);
  const rerender = useRerender();

  return (
    <>
      <ChapterHeader
        title="useEffect"
        subtitle="You don't need useEffect. Maybe useMemo will do the thing?"
      />

      <Toolbar>
        <Button text="Click me to re-render the component" onClick={rerender} />
      </Toolbar>
      <Toolbar>⬅️ ⬆️ ➡️ ⬇️ Use arrow keys to move the ball.</Toolbar>

      <div style={{ position: 'relative' }}>
        <div style={style}>⚽️</div>
      </div>
    </>
  );
}
