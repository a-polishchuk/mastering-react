import { ChapterWrapper, ColoredBlock, LoggedLifecycle, TextBlock } from 'components';
import { useRerender } from 'hooks/useRerender';
import { useRef } from 'react';

export function RemountComponent() {
  const keyRef = useRef<number>(0);

  keyRef.current = keyRef.current + 1;

  return (
    <ChapterWrapper title="Re-mount component" subtitle="Key property" rerender={useRerender()}>
      <TextBlock>
        <div>ℹ️ You can force a component to unmount and mount again (aka re-mount).</div>
        <div>
          ℹ️ Simply change the <code>key</code> value, and React will create a new component
          instance.
        </div>
        <div>
          ❗️ Note that usually you don't need to do that. It's a hack. But it could be usefull in
          rare cases.
        </div>
      </TextBlock>

      <LoggedLifecycle key={keyRef.current} tag="Random key">
        <ColoredBlock>My key is changing every render.</ColoredBlock>
      </LoggedLifecycle>
    </ChapterWrapper>
  );
}
