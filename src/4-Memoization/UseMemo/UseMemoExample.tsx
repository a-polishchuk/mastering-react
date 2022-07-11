import { Button } from 'components/Button';
import { ChapterHeader } from 'components/ChapterHeader';
import { ColoredBlock } from 'components/ColoredBlock';
import { Toolbar } from 'components/Toolbar';
import { useRerender } from 'hooks/useRerender';
import { memo, MouseEventHandler, useMemo } from 'react';

import { Leaf } from './Leaf';
import { nodeStyle } from './nodeStyle';

interface NodeProps {
  level: number;
  maxLevel: number;
  path: string[];
}

const MemoizedNode = memo(({ level, maxLevel, path }: NodeProps): JSX.Element => {
  const rerender = useRerender();
  const leftPath = useMemo(() => [...path, 'left'], [path]);
  const rightPath = useMemo(() => [...path, 'right'], [path]);

  const handleClick: MouseEventHandler = (event) => {
    event.stopPropagation();
    rerender();
  };

  if (level === maxLevel) {
    return <Leaf path={path} onClick={handleClick} />;
  }

  return (
    <ColoredBlock style={nodeStyle} onClick={handleClick}>
      <MemoizedNode level={level + 1} maxLevel={maxLevel} path={leftPath} />
      <MemoizedNode level={level + 1} maxLevel={maxLevel} path={rightPath} />
    </ColoredBlock>
  );
});

export function UseMemoExample(): JSX.Element {
  const rerender = useRerender();

  return (
    <>
      <ChapterHeader title="useMemo" subtitle="React.memo + useMemo" />

      <Toolbar>
        <Button text="Click me to re-render the whole thing" onClick={rerender} />
      </Toolbar>

      <MemoizedNode level={0} maxLevel={2} path={['root']} />
    </>
  );
}
