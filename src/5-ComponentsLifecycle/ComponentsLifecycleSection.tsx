import { Chapter, Section } from 'components/MasterDetail';

import { ConditionalRendering } from './Keys/ConditionalRendering';
import { KeysAndLists } from './Keys/KeysAndLists/KeysAndLists';
import { RemountComponent } from './Keys/RemountComponent';
import { RandomRendering } from './RandomRendering/RandomRendering';

export function ComponentsLifecycleSection(): JSX.Element {
  return (
    <Section title="Components lifecycle">
      <Section title="Key property">
        <Chapter title="Keys and lists" component={KeysAndLists} />
        <Chapter title="Re-mount component" component={RemountComponent} />
        <Chapter title="Conditional rendering" component={ConditionalRendering} />
      </Section>
      <Chapter title="Random rendering" component={RandomRendering} />
    </Section>
  );
}
