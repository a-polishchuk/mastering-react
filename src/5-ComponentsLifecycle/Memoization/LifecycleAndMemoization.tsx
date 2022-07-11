import { Button } from 'components/Button';
import { ChapterHeader } from 'components/ChapterHeader';
import { ColoredBlock } from 'components/ColoredBlock';
import { LoggedLifecycle } from 'components/LoggedLifecycle';
import { Toolbar } from 'components/Toolbar';
import { useRerender } from 'hooks/useRerender';
import { memo, useCallback, useMemo } from 'react';

import { MemoRenderFunc } from './MemoRenderFunc';
import { MemoText } from './MemoText';

const MemoLoggedLifecycle = memo(LoggedLifecycle);

export function LifecycleAndMemoization(): JSX.Element {
  const rerender = useRerender();

  const useMemoText = useMemo(
    () => <MemoText tag="4. useMemoText" text="4. Text wrapped with useMemo" />,
    []
  );

  const renderFunc = () => (
    <LoggedLifecycle tag="5. Render func">5. Text rendered with render function</LoggedLifecycle>
  );

  const memoizedRenderFunc = useCallback(
    () => (
      <LoggedLifecycle tag="6. useCallback(render func)">
        6. Text rendered with memoized render function
      </LoggedLifecycle>
    ),
    []
  );

  return (
    <>
      <ChapterHeader title="Components lifecycle" subtitle="Memoization" />

      <Toolbar>
        <Button text="Click me to trigger new render" onClick={rerender} />
      </Toolbar>

      <ColoredBlock>
        <MemoLoggedLifecycle tag="1. Static text parent">
          1. Just a static text here.
        </MemoLoggedLifecycle>

        <MemoLoggedLifecycle tag="2. Span parent">
          <div>
            2. <strong>&lt;span&gt;</strong>Also text, but inside span
            <strong>&lt;/span&gt;</strong>
          </div>
        </MemoLoggedLifecycle>

        <MemoLoggedLifecycle tag="3. MemoText parent">
          <MemoText tag="3. MemoText" text="3. Memoized text component" />
        </MemoLoggedLifecycle>

        <MemoLoggedLifecycle tag="4. useMemoText parent">{useMemoText}</MemoLoggedLifecycle>

        <MemoRenderFunc tag="5. MemoRenderFunc" renderContent={renderFunc} />
        <br />

        <MemoRenderFunc tag="6. MemoRenderFunc" renderContent={memoizedRenderFunc} />
        <br />
      </ColoredBlock>
    </>
  );
}
