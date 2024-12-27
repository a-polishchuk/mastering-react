import { ChapterWrapper, ColoredBlock } from 'components';
import { useRerender } from 'hooks/useRerender';
import { MouseEventHandler } from 'react';
import { Leaf } from './Leaf';
import { nodeStyle } from './nodeStyle';

type NodeProps = {
    level: number;
    maxLevel: number;
    path: string[];
};

function Node({ level, maxLevel, path }: NodeProps) {
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

export function WhenReactRenderComponents() {
    return (
        <ChapterWrapper
            title="useMemo"
            subtitle="When React render components?"
            rerender={useRerender()}
        >
            <Node level={0} maxLevel={2} path={['root']} />
        </ChapterWrapper>
    );
}
