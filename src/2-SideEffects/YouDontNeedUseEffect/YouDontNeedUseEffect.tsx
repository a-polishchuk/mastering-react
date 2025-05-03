import { Button, ChapterWrapper, TextBlock, Toolbar } from 'components';
import { useRerender } from 'hooks/useRerender';
import { CSSProperties } from 'react';
import { useBallPosition } from './useBallPosition';

export function YouDontNeedUseEffect() {
    const [left, top] = useBallPosition(MIN_STEP, MAX_STEP);
    const style = buildStyle(left, top);
    const rerender = useRerender();

    return (
        <ChapterWrapper title="You don't need useEffect" subtitle="Side effects, useEffect">
            <Toolbar>
                <Button text="Click me to re-render the component" onClick={rerender} />
            </Toolbar>
            <TextBlock type="info">Use ⬅️ ⬆️ ➡️ ⬇️ to move the ball.</TextBlock>

            <div style={{ position: 'relative' }}>
                <div style={style}>⚽️</div>
            </div>
        </ChapterWrapper>
    );
}

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
