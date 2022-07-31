import { ChapterWrapper, ColoredBlock, LoggedLifecycle } from 'components';
import { useRerender } from 'hooks/useRerender';
import { useRef } from 'react';

export function RemountComponent(): JSX.Element {
  const keyRef = useRef<number>(0);

  keyRef.current = keyRef.current + 1;

  return (
    <ChapterWrapper title="Key property" subtitle="Re-mount component" rerender={useRerender()}>
      <LoggedLifecycle key={keyRef.current} tag="Random key">
        <ColoredBlock>My key is changing every render.</ColoredBlock>
      </LoggedLifecycle>
    </ChapterWrapper>
  );
}
