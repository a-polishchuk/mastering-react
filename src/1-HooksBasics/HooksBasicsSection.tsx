import { Chapter, Section } from 'components';

import { UseCounterExample } from './CustomHooks/UseCounterExample';
import { UseMergedStateExample } from './CustomHooks/UseMergedStateExample';
import { DirectDomChanges } from './DirectDomChanges';
import { LazyInitialization } from './LazyInitialization/LazyInitialization';
import { PreviousStateUpdate } from './PreviousStateUpdate';
import { StoringFunctions } from './StoringFunctions';
import { UseStateAndNewRenders } from './UseStateAndNewRenders';
import { UseStateBasics } from './UseStateBasics';

export function HooksBasicsSection(): JSX.Element {
  return (
    <Section title="Hooks basics, useState">
      <Chapter
        emoji="🪝"
        title="useState basics"
        path="usestate-basics"
        element={<UseStateBasics />}
      />
      <Chapter
        emoji="📈"
        title="Previous state update"
        path="prev-state-update"
        element={<PreviousStateUpdate />}
      />
      <Section title="First custom hooks">
        <Chapter emoji="🔢" title="useCounter" path="use-counter" element={<UseCounterExample />} />
        <Chapter
          emoji="📑"
          title="useMergedState"
          path="use-merged-state"
          element={<UseMergedStateExample />}
        />
      </Section>
      <Chapter
        emoji="🦥"
        title="Lazy initialization"
        path="lazy-init"
        element={<LazyInitialization />}
      />
      <Chapter
        emoji="⇒"
        title="Storing functions"
        path="storing-functions"
        element={<StoringFunctions />}
      />
      <Chapter
        emoji="🎞"
        title="useState and new renders"
        path="use-state-and-new-renders"
        element={<UseStateAndNewRenders />}
      />
      <Chapter
        emoji="🔀"
        title="Direct DOM changes"
        path="direct-dom-changes"
        element={<DirectDomChanges />}
      />
    </Section>
  );
}
