import { ChapterWrapper } from 'components';
import { useRerender } from 'hooks/useRerender';
import { ITEMS } from '../ItemData';
import { EmojisGallery } from './EmojisGallery';

export function ListWithoutMemoization() {
  return (
    <ChapterWrapper
      title="useCallback"
      subtitle="List without memoization"
      rerender={useRerender()}
    >
      <EmojisGallery items={ITEMS} />
    </ChapterWrapper>
  );
}
