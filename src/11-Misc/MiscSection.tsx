import { Chapter, Section } from 'components/MasterDetail';
import { RouterPath } from 'config/RouterPath';
import { ErrorBoundaryExample } from './ErrorBoundary/ErrorBoundaryExample';
import { SuspenseExample } from './Suspense/SuspenseExample';

export function MiscSection() {
    return (
        <Section title="Misc">
            <Chapter
                emoji="⛔"
                title="Error boundary"
                path={RouterPath.ERROR_BOUNDARY}
                element={<ErrorBoundaryExample />}
            />
            <Chapter
                emoji="⌛"
                title="Suspense"
                path={RouterPath.SUSPENSE}
                element={<SuspenseExample />}
            />
        </Section>
    );
}
