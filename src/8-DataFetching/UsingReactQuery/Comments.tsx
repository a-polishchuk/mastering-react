import { LoadingSpinner } from 'components';
import styles from './Comments.module.css';
import { useComments } from './hooks/useCommets';

export function Comments() {
    const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useComments();

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (!data) {
        return <div className={styles.error}>No comments found</div>;
    }

    return (
        <div className={styles.commentsContainer}>
            {data.pages.map((page, pageIndex) => (
                <div key={`page-${pageIndex}`}>
                    {page.data.map((comment) => (
                        <div key={comment.id} className={styles.commentItem}>
                            <h3 className={styles.commentTitle}>{comment.name}</h3>
                            <div className={styles.commentMeta}>
                                <span className={styles.commentEmail}>{comment.email}</span>
                            </div>
                            <p className={styles.commentBody}>{comment.body}</p>
                        </div>
                    ))}
                </div>
            ))}

            {hasNextPage && (
                <div className={styles.loadMoreContainer}>
                    <button
                        className={styles.loadMoreButton}
                        onClick={() => fetchNextPage()}
                        disabled={isFetchingNextPage}
                    >
                        {isFetchingNextPage ? 'Loading...' : 'Load more comments'}
                    </button>
                </div>
            )}
        </div>
    );
}
