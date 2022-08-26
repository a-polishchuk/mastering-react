import { Chapter, Section } from 'components/MasterDetail';
import { RouterPath } from 'config/RouterPath';

import { UsingRematch } from './UsingRematch/UsingRematch';

export function StateManagementSection(): JSX.Element {
  return (
    <Section title="State management">
      <Chapter
        emoji="🤹🏼‍♂️"
        title="Rematch (Redux)"
        path={RouterPath.STATE_REMATCH}
        element={<UsingRematch />}
      />
    </Section>
  );
}
