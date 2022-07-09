import { Chapter, Section } from 'components/MasterDetail';

import { UseCounterExample } from './CustomHooks/UseCounterExample';
import { UseMergedStateExample } from './CustomHooks/UseMergedStateExample';
import { LazyInitialization } from './LazyInitialization/LazyInitialization';
import { PreviousStateUpdate } from './PreviousStateUpdate';
import { StoringFunctions } from './StoringFunctions';
import { UseStateBasics } from './UseStateBasics';

export function HooksBasicsSection(): JSX.Element {
  return (
    <Section title="Hooks basics, useState">
      <Chapter title="useState basics" component={UseStateBasics} />
      <Chapter title="Previous state update" component={PreviousStateUpdate} />
      <Section title="First custom hooks">
        <Chapter title="useCounter" component={UseCounterExample} />
        <Chapter title="useMergedState" component={UseMergedStateExample} />
      </Section>
      <Chapter title="Lazy initialization" component={LazyInitialization} />
      <Chapter title="Storing functions" component={StoringFunctions} />
    </Section>
  );
}
