import { ChapterWrapper, TextBlock } from 'components';
import { useEffect, useState } from 'react';
import { WindowSizePreview } from './WindowSizePreview';

const STEP = 10;
const MIN_WIDTH = 100;
const MAX_WIDTH = 300;

export function UseGlobalEvents() {
    const [previewWidth, setPreviewWidth] = useState<number>((MAX_WIDTH + MIN_WIDTH) / 2);

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'ArrowLeft':
                    setPreviewWidth((value) => Math.max(value - STEP, MIN_WIDTH));
                    break;
                case 'ArrowRight':
                    setPreviewWidth((value) => Math.min(value + STEP, MAX_WIDTH));
                    break;
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, []);

    return (
        <ChapterWrapper title="Listening to global events" subtitle="Side effects, useEffect">
            <TextBlock type="info">Use ⬅️ ➡️ to change the preview window size.</TextBlock>
            <WindowSizePreview previewWidth={previewWidth} />
        </ChapterWrapper>
    );
}
