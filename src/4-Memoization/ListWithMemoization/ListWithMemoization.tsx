import { ChapterWrapper } from 'components';
import { useRerender } from 'hooks/useRerender';
import { ITEMS } from '../ItemData';
import { EmojisGallery } from './EmojisGallery';

export function ListWithMemoization() {
    return (
        <ChapterWrapper
            title="useCallback"
            subtitle="List with memoization"
            rerender={useRerender()}
        >
            <EmojisGallery items={ITEMS} />
        </ChapterWrapper>
    );
}
