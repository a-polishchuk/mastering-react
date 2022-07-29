import { Button } from 'components';
import { ChapterHeader } from 'components/ChapterHeader';
import { Toolbar } from 'components/Toolbar';
import { useRerender } from 'hooks/useRerender';

import { ITEMS } from '../ItemData';
import { EmojisGallery } from './EmojisGallery';

export function ListWithoutMemoization() {
  const rerender = useRerender();

  return (
    <>
      <ChapterHeader title="useCallback" subtitle="List without memoization" />

      <Toolbar>
        <Button text="Click me to re-render" onClick={rerender} />
      </Toolbar>

      <EmojisGallery items={ITEMS} />
    </>
  );
}
