import { ChapterWrapper } from 'components';
import { RelatedDocs } from 'components/RelatedDocs/RelatedDocs';
import { useRerender } from 'hooks/useRerender';
import { StrictMode, useRef } from 'react';
import { logTagged } from 'utils/logTagged';

export function StrictModeExample() {
    const rerender = useRerender();

    return (
        <ChapterWrapper title="StrictMode" rerender={rerender}>
            <StrictMode>
                <ChildComponent />
            </StrictMode>
            <RelatedDocs
                docs={[
                    {
                        label: 'StrictMode',
                        href: 'https://react.dev/reference/react/StrictMode',
                    },
                ]}
            />
        </ChapterWrapper>
    );
}

function ChildComponent() {
    const rendersCount = useRef(0);
    rendersCount.current++;
    logTagged('render', String(rendersCount.current));

    const onRefAquired = () => {
        logTagged('ref callback', String(rendersCount.current));
    };

    return (
        <>
            <h2>This component is in strict mode</h2>
            <p ref={onRefAquired}>Renders count: {rendersCount.current}</p>
        </>
    );
}
