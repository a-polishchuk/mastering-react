import { Chapter, Section } from 'components/MasterDetail';
import { RouterPath } from 'config/RouterPath';
import { lazy } from 'react';

const UsingReactQuery = lazy(() => import('./UsingReactQuery'));
const UsingSwr = lazy(() => import('./UsingSwr'));

export function DataFecthingSection() {
    return (
        <Section title="Data fecthing">
            <Chapter
                emoji="📡"
                title="TanStack Query / React Query"
                path={RouterPath.REACT_QUERY}
                element={<UsingReactQuery />}
            />
            <Chapter emoji="📡" title="SWR" path={RouterPath.SWR} element={<UsingSwr />} />
        </Section>
    );
}
