import { Button } from 'components';
import { ChapterHeader } from 'components';
import { Toolbar } from 'components';
import { useRerender } from 'hooks/useRerender';

import { ITEMS } from '../ItemData';
import { EmojisGallery } from './EmojisGallery';

export function ListWithMemoization(): JSX.Element {
  const rerender = useRerender();

  return (
    <>
      <ChapterHeader title="useCallback" subtitle="List with memoization" />

      <Toolbar>
        <Button text="Click me to re-render" onClick={rerender} />
      </Toolbar>

      <EmojisGallery items={ITEMS} />
    </>
  );
}
