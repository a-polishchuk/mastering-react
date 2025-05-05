import { ChapterWrapper, ColoredBlock, RelatedDocs } from 'components';
import { useRerender } from 'hooks/useRerender';
import { memo, MouseEventHandler, useMemo } from 'react';
import { Leaf } from './Leaf';
import { nodeStyle } from './nodeStyle';

type NodeProps = {
    level: number;
    maxLevel: number;
    path: string[];
};

const MemoizedNode = memo(({ level, maxLevel, path }: NodeProps) => {
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

const ROOT_PATH = ['root'];

export function UseMemoExample() {
    return (
        <ChapterWrapper title="useMemo" subtitle="React.memo + useMemo" rerender={useRerender()}>
            <MemoizedNode level={0} maxLevel={2} path={ROOT_PATH} />
            <RelatedDocs
                docs={[
                    {
                        label: 'useMemo Hook Reference',
                        href: 'https://react.dev/reference/react/useMemo',
                    },
                    {
                        label: 'Skipping Re-rendering with memo',
                        href: 'https://react.dev/reference/react/memo',
                    },
                ]}
            />
        </ChapterWrapper>
    );
}
