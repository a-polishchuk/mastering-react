import { Chapter, Section } from 'components/MasterDetail';
import { lazy } from 'react';

// import { UsingReactQuery } from './UsingReactQuery/UsingReactQuery';
// import { UsingSwr } from './UsingSwr/UsingSwr';

const UsingReactQuery = lazy(() => import('./UsingReactQuery'));
const UsingSwr = lazy(() => import('./UsingSwr'));

export function DataFecthingSection(): JSX.Element {
  return (
    <Section title="Data fecthing">
      <Chapter emoji="🌐" title="React Query" path="react-query" element={<UsingReactQuery />} />
      <Chapter emoji="🌐" title="SWR" path="swr" element={<UsingSwr />} />
    </Section>
  );
}
