import { Section, Chapter } from 'components/MasterDetail';

import { UseStateBasics } from './UseStateBasics';
import { PreviousStateUpdate } from './PreviousStateUpdate';
import { UseCounterExample } from './CustomHooks/UseCounterExample';
import { UseMergedStateExample } from './CustomHooks/UseMergedStateExample';
import { LazyInitialization } from './LazyInitialization/LazyInitialization';
import { StoringFunctions } from './StoringFunctions';

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
