import { useCounter } from '1-HooksBasics/CustomHooks/useCounter';
import { ChapterWrapper, RelatedDocs } from 'components';
import { useEffect } from 'react';
import { logTagged } from 'utils/logTagged';
import { Counter } from './Counter';

const DELTA = 1;

export function ComponentLifecycle() {
    const { value, increase, decrease } = useCounter(0, DELTA);

    // ! async functions are not allowed here
    useEffect(() => {
        logTagged('useEffect', 'component did mount');

        // optional cleanup function
        return () => {
            logTagged('useEffect', 'component will unmount');
        };
    }, []);

    useEffect(() => {
        logTagged('one more effect', 'component did mount');
    }, []);

    useEffect(() => {
        logTagged('effect with no deps', 'executed AFTER each render');
    }); // ! deps list is missing

    logTagged('Render', 'render function was called by React');

    return (
        <ChapterWrapper title="Component lifecycle" subtitle="useEffect basics">
            <Counter value={value} delta={DELTA} increase={increase} decrease={decrease} />
            <RelatedDocs
                docs={[
                    {
                        label: 'useEffect Hook Reference',
                        href: 'https://react.dev/reference/react/useEffect',
                    },
                ]}
            />
        </ChapterWrapper>
    );
}
