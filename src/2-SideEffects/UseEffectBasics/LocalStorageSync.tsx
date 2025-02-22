import { ChapterWrapper } from 'components';
import { RelatedDocs } from 'components/RelatedDocs/RelatedDocs';
import { useEffect, useState } from 'react';
import { logTagged } from 'utils/logTagged';
import { Counter } from './Counter';

const DELTA = 1;
const STORAGE_KEY = 'chapter-6-current-count';

export function LocalStorageSync() {
    const [count, setCount] = useState<number | null>(null);
    const increase = () => setCount((value) => (value || 0) + DELTA);
    const decrease = () => setCount((value) => (value || 0) - DELTA);

    useEffect(function readFromStorage() {
        try {
            const stringValue = localStorage.getItem(STORAGE_KEY) ?? '0';
            logTagged('Read', stringValue);
            setCount(parseInt(stringValue));
        } catch (error) {
            console.error('could not read from a local storage');
            console.error(error);
        }
    }, []);

    useEffect(
        function writeToStorage() {
            if (count === null) {
                return;
            }
            try {
                const stringValue = String(count);
                logTagged('Write', stringValue);
                localStorage.setItem(STORAGE_KEY, stringValue);
            } catch (error) {
                console.error('could not write to local storage');
                console.error(error);
            }
        },
        [count],
    );

    logTagged('Render', String(count));

    return (
        <ChapterWrapper title="Local storage sync" subtitle="useEffect basics">
            <Counter value={count || 0} delta={DELTA} increase={increase} decrease={decrease} />
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
