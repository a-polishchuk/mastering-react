import { ChapterWrapper, LoadingSpinner, PropsTable, Toolbar } from 'components';
import { RelatedDocs } from 'components/RelatedDocs/RelatedDocs';
import { ChangeEventHandler, useState } from 'react';
import { useFetch } from './useFetch';

type PostData = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export function DataFetchWithUseEffect() {
    const [postId, setPostId] = useState<string>('1');
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    const { data, isLoading, error } = useFetch<PostData>(url);

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setPostId(event.target.value);
    };

    return (
        <ChapterWrapper title="useEffect + fetch API" subtitle="Data fetching, useFetch hook">
            <Toolbar>
                Post ID <input type="number" value={postId} onChange={handleInputChange} />
            </Toolbar>

            {isLoading ? (
                <div style={{ position: 'relative', height: 200 }}>
                    <LoadingSpinner />
                </div>
            ) : error ? (
                <div style={{ color: 'red' }}>
                    <strong>Error: </strong>
                    {error instanceof Error ? error.message : 'Unknown error'}
                </div>
            ) : (
                <PropsTable title={`/posts/${postId}`} data={data} />
            )}

            <RelatedDocs
                docs={[
                    {
                        label: 'fetch API',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API',
                    },
                    {
                        label: 'Fetching data with effects',
                        href: 'https://react.dev/reference/react/useEffect#fetching-data-with-effects',
                    },
                    {
                        label: 'JSON to TypeScript',
                        href: 'https://transform.tools/json-to-typescript',
                    },
                ]}
            />
        </ChapterWrapper>
    );
}
