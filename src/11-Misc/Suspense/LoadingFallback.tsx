import { LoadingSpinner } from 'components';
import styles from './LoadingFallback.module.css';

export function LoadingFallback() {
    return (
        <div className={styles.loadingFallback}>
            <LoadingSpinner />
        </div>
    );
}
