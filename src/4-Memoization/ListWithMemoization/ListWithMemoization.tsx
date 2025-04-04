import { ChapterWrapper } from 'components';
import { RelatedDocs } from 'components/RelatedDocs/RelatedDocs';
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
            <RelatedDocs
                docs={[
                    {
                        label: 'useCallback Hook Reference',
                        href: 'https://react.dev/reference/react/useCallback',
                    },
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
