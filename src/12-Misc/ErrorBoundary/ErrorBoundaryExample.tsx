import { ChapterWrapper, RelatedDocs } from 'components';
import { ErrorBoundary } from './ErrorBoundary';

export function ErrorBoundaryExample() {
    return (
        <ChapterWrapper title="Error boundary">
            <ErrorBoundary>
                <ComponentWithError />
                <ErrorBoundary fallback={<div>Error was caught by inner ErrorBoundary</div>}>
                    <div>
                        You can move ComponentWithError here and the error will be caught by inner
                        ErrorBoundary
                    </div>
                </ErrorBoundary>
            </ErrorBoundary>
            <RelatedDocs
                docs={[
                    {
                        label: 'Error Boundaries',
                        href: 'https://react.dev/reference/react/Component#static-getderivedstatefromerror',
                    },
                    {
                        label: 'react-error-boundary',
                        href: 'https://www.npmjs.com/package/react-error-boundary',
                    },
                ]}
            />
        </ChapterWrapper>
    );
}

function ComponentWithError() {
    throw new Error('This error was caught by closest ErrorBoundary');

    // eslint-disable-next-line no-unreachable
    return <div>This component throws an error.</div>;
}
