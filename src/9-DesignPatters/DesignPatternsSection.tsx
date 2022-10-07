import { Chapter, Section } from 'components/MasterDetail';
import { RouterPath } from 'config/RouterPath';

import { CompoundComponent } from './CompoundComponent/CompoundComponent';
import { HooksFactory } from './HooksFactory/HooksFactory';

export function DesignPatternsSection(): JSX.Element {
  return (
    <Section title="Design patterns">
      <Chapter
        emoji="🏭"
        title="Hooks factory"
        path={RouterPath.HOOKS_FACTORY}
        element={<HooksFactory />}
      />
      <Chapter
        emoji="🔢"
        title="Compound component"
        path={RouterPath.COMPOUND_COMPONENT}
        element={<CompoundComponent />}
      />
    </Section>
  );
}
