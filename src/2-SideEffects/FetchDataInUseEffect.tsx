import { ChapterWrapper, LoadingSpinner, PropsTable, Toolbar } from 'components';
import { ChangeEventHandler, useEffect, useState } from 'react';

type PostData = Record<string, any>;

const ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
const STATUS_OK = 200;

export function FetchDataInUseEffect() {
    const [postId, setPostId] = useState<string>('1');
    const [postData, setPostData] = useState<PostData | null>(null);

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        setLoading(true);
        fetch(`${ENDPOINT}/${postId}`)
            .then((response) => {
                if (response.status !== STATUS_OK) {
                    throw new Error(`Status code ${response.status}`);
                }
                return response.json();
            })
            .then((json) => {
                setPostData(json);
                setError(null);
            })
            .catch((err) => {
                setPostData(null);
                setError(err);
            })
            .finally(() => setLoading(false));
    }, [postId]);

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setPostId(event.target.value);
    };

    return (
        <ChapterWrapper title="Fetch data in useEffect" subtitle="Side effects, useEffect">
            <Toolbar>
                Post ID <input type="number" value={postId} onChange={handleInputChange} />
            </Toolbar>

            {loading ? (
                <LoadingSpinner />
            ) : error ? (
                <div style={{ color: 'red' }}>
                    <strong>Error: </strong>
                    {error.message}
                </div>
            ) : (
                <PropsTable title={`/posts/${postId}`} data={postData} />
            )}
        </ChapterWrapper>
    );
}
