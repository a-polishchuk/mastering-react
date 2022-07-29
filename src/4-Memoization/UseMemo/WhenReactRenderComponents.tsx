import { Button } from 'components';
import { ChapterHeader } from 'components/ChapterHeader';
import { ColoredBlock } from 'components/ColoredBlock';
import { Toolbar } from 'components/Toolbar';
import { useRerender } from 'hooks/useRerender';
import { MouseEventHandler } from 'react';

import { Leaf } from './Leaf';
import { nodeStyle } from './nodeStyle';

interface NodeProps {
  level: number;
  maxLevel: number;
  path: string[];
}

function Node({ level, maxLevel, path }: NodeProps): JSX.Element {
  const rerender = useRerender();

  const handleClick: MouseEventHandler = (event) => {
    event.stopPropagation();
    rerender();
  };

  if (level === maxLevel) {
    return <Leaf path={path} onClick={handleClick} />;
  }

  return (
    <ColoredBlock style={nodeStyle} onClick={handleClick}>
      <Node level={level + 1} maxLevel={maxLevel} path={[...path, 'left']} />
      <Node level={level + 1} maxLevel={maxLevel} path={[...path, 'right']} />
    </ColoredBlock>
  );
}

export function WhenReactRenderComponents(): JSX.Element {
  const rerender = useRerender();

  return (
    <>
      <ChapterHeader title="useMemo" subtitle="When React render components?" />

      <Toolbar>
        <Button text="Click me to re-render the whole thing" onClick={rerender} />
      </Toolbar>

      <Node level={0} maxLevel={2} path={['root']} />
    </>
  );
}
