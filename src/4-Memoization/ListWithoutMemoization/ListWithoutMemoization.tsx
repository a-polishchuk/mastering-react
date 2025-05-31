import { ChapterWrapper } from 'components';
import { useRerender } from 'hooks/useRerender';
import { ITEMS } from '../ItemData';
import { EmojisGallery } from './EmojisGallery';

export function ListWithoutMemoization() {
    const rerender = useRerender();

    return (
        <ChapterWrapper title="useCallback" subtitle="List without memoization" rerender={rerender}>
            <EmojisGallery items={ITEMS} />
        </ChapterWrapper>
    );
}
