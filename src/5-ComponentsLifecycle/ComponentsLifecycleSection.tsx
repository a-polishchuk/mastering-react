import { Chapter, Section } from 'components/MasterDetail';

import { ConditionalRendering } from './ConditionalRendering';
import { KeysAndLists } from './KeysAndLists/KeysAndLists';
import { RemountComponent } from './RemountComponent';

export function ComponentsLifecycleSection(): JSX.Element {
  return (
    <Section title="Components lifecycle">
      <Section title="Key property">
        <Chapter title="Keys and lists" component={KeysAndLists} />
        <Chapter title="Re-mount component" component={RemountComponent} />
        <Chapter title="Conditional rendering" component={ConditionalRendering} />
      </Section>
    </Section>
  );
}
