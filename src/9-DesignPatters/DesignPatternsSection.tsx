import { Chapter, Section } from 'components/MasterDetail';

import { HooksFactory } from './HooksFactory/HooksFactory';

export function DesignPatternsSection(): JSX.Element {
  return (
    <Section title="Design patterns">
      <Chapter emoji="🏭" title="Hooks factory" path="hooks-factory" element={<HooksFactory />} />
    </Section>
  );
}
