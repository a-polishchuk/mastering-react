import { ChapterWrapper } from 'components';
import { RelatedDocs } from 'components/RelatedDocs/RelatedDocs';
import { Suspense, lazy } from 'react';
import { LoadingFallback } from './LoadingFallback';

const LazyHeavyComponent = lazy(
    () =>
        // simulating network delay
        new Promise<{ default: typeof import('./HeavyComponent').HeavyComponent }>((resolve) =>
            setTimeout(() => {
                import('./HeavyComponent').then((module) => {
                    resolve({ default: module.HeavyComponent });
                });
            }, 1500),
        ),
);

export function SuspenseExample() {
    return (
        <ChapterWrapper title="Suspense">
            <Suspense fallback={<LoadingFallback />}>
                <LazyHeavyComponent />
            </Suspense>
            <RelatedDocs
                docs={[
                    {
                        label: 'React Suspense',
                        href: 'https://react.dev/reference/react/Suspense',
                    },
                    {
                        label: 'React Lazy',
                        href: 'https://react.dev/reference/react/lazy',
                    },
                ]}
            />
        </ChapterWrapper>
    );
}
