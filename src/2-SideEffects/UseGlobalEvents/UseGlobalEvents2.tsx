import { ChapterHeader } from 'components';
import { Toolbar } from 'components';
import { useState } from 'react';

import { useKeyDown } from './useKeyDown';
import { WindowSizePreview } from './WindowSizePreview';

const STEP = 10;
const MIN_WIDTH = 100;
const MAX_WIDTH = 300;

export function UseGlobalEvents(): JSX.Element {
  const [previewWidth, setPreviewWidth] = useState<number>((MAX_WIDTH + MIN_WIDTH) / 2);

  useKeyDown((buttonKey: string) => {
    switch (buttonKey) {
      case 'ArrowLeft':
        setPreviewWidth((value) => Math.max(value - STEP, MIN_WIDTH));
        break;
      case 'ArrowRight':
        setPreviewWidth((value) => Math.min(value + STEP, MAX_WIDTH));
        break;
    }
  });

  return (
    <>
      <ChapterHeader title="useEffect" subtitle="Listening to global events" />
      <Toolbar>Use ⬅️ ➡️ to change the preview window size.</Toolbar>
      <WindowSizePreview previewWidth={previewWidth} />
    </>
  );
}
