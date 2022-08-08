import { Chapter, Section } from 'components/MasterDetail';

import { UsingRematch } from './UsingRematch/UsingRematch';

export function StateManagementSection(): JSX.Element {
  return (
    <Section title="State management">
      <Chapter emoji="🌐" title="Rematch" path="rematch" element={<UsingRematch />} />
    </Section>
  );
}
