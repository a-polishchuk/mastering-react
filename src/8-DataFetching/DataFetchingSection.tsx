import { Chapter, Section } from 'components/MasterDetail';

import { UsingReactQuery } from './UsingReactQuery/UsingReactQuery';

// TODO: check how lazy loading works with react router
// const UsingSwr = lazy(() => import('./UsingSwr'));
// const UsingReactQuery = lazy(() => import('./UsingReactQuery'));

export function DataFecthingSection() {
  return (
    <Section title="Data fecthing">
      <Chapter emoji="🌐" title="React Query" path="react-query" element={<UsingReactQuery />} />
    </Section>
  );
}
