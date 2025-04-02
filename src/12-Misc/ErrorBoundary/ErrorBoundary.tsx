import { Component, ErrorInfo, ReactNode } from 'react';
import styles from './ErrorBoundary.module.css';

export type ErrorBoundaryProps = {
    fallback?: ReactNode;
    children: ReactNode;
};

type ErrorBoundaryState = {
    error: Error | null;
    errorInfo: ErrorInfo | null;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            error,
            errorInfo,
        });
    }

    render() {
        const { error, errorInfo } = this.state;
        const { children, fallback } = this.props;
        if (!error) {
            return children;
        }
        if (fallback) {
            return fallback;
        }
        return (
            <div className={styles.error}>
                <div>⛔ {error?.message}</div>
                <div style={{ whiteSpace: 'pre-line' }}>{errorInfo?.componentStack}</div>
            </div>
        );
    }
}
