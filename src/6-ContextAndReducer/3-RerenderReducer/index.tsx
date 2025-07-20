import { ChapterWrapper, ColoredBlock } from 'components';
import { useRerender } from './useRerender';

export function RerenderReducerChapter() {
    const rerender = useRerender();

    return (
        <ChapterWrapper
            title="useReducer"
            subtitle="useRerender hook version 2"
            rerender={rerender}
        >
            <ColoredBlock onClick={rerender}>Click me to trigger re-render</ColoredBlock>
        </ChapterWrapper>
    );
}
