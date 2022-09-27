import { Button, ChapterWrapper, FlexRow, Toolbar } from 'components';
import { useRerender } from 'hooks/useRerender';
import { useToggle } from 'hooks/useToggle';
import { useState } from 'react';

import { BlockMemoizedRefCallback } from './BlockMemoizedRefCallback';
import { BlockProps } from './BlockProps';
import { BlockRefCallback } from './BlockRefCallback';
import { BlockUseRef } from './BlockUseRef';

type ComponentType = (props: BlockProps) => JSX.Element;

export function MemoizedRefCallback(): JSX.Element {
  const rerender = useRerender();
  const [BlockComponent, setBlockComponent] = useState<ComponentType>(() => BlockUseRef);
  const [visible, toggleVisibility] = useToggle(true);

  const componentButton = (text: string, component: ComponentType): JSX.Element => (
    <Button
      text={text}
      onClick={() => setBlockComponent(() => component)}
      disabled={BlockComponent === component}
    />
  );

  return (
    <ChapterWrapper title="Memoized ref callback" subtitle="Memoization" rerender={rerender}>
      <h3>Choose block component</h3>
      <Toolbar>
        {componentButton('useRef', BlockUseRef)}
        {componentButton('Ref callback', BlockRefCallback)}
        {componentButton('Memoized ref callback', BlockMemoizedRefCallback)}
      </Toolbar>

      <h3>
        Toggle <code>{'<div />'}</code> rendering
      </h3>
      <Toolbar>
        <Button text={visible ? 'Hide div' : 'Show div'} onClick={toggleVisibility} />
      </Toolbar>

      <FlexRow>
        <BlockComponent visible={visible} />
        <BlockComponent visible={visible} />
      </FlexRow>
      <FlexRow>
        <BlockComponent visible={visible} />
      </FlexRow>
      <FlexRow>
        <BlockComponent visible={visible} />
        <BlockComponent visible={visible} />
        <BlockComponent visible={visible} />
      </FlexRow>
    </ChapterWrapper>
  );
}
