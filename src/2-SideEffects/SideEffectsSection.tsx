import { Chapter, Section } from 'components/MasterDetail';

import { FetchDataInUseEffect } from './FetchDataInUseEffect';
import { BewareOfInfiniteLoops } from './InfiniteLoops/BewareOfInfiniteLoops';
import { UseEffectAndInterval } from './UseEffectAndInterval/UseEffectAndInterval';
import { ComponentLifecycle } from './UseEffectBasics/ComponentLifecycle';
import { EffectDependencies } from './UseEffectBasics/EffectDependencies';
import { LocalStorageSync } from './UseEffectBasics/LocalStorageSync';
import { UseGlobalEvents } from './UseGlobalEvents/UseGlobalEvents';
import { EffectsSequence } from './UseLayoutEffect/EffectsSequence';
import { UseLayoutEffectExample } from './UseLayoutEffect/UseLayoutEffectExample';
import { YouDontNeedUseEffect } from './YouDontNeedUseEffect/YouDontNeedUseEffect';

export function SideEffectsSection(): JSX.Element {
  return (
    <Section title="Side effects, useEffect">
      <Section title="useEffect basics">
        <Chapter
          emoji="🔂"
          title="Component lifecycle"
          path="component-lifecycle"
          element={<ComponentLifecycle />}
        />
        <Chapter
          emoji="⛓"
          title="Effect dependencies"
          path="effect-dependencies"
          element={<EffectDependencies />}
        />
        <Chapter
          emoji="📥"
          title="Local storage sync"
          path="local-storage-sync"
          element={<LocalStorageSync />}
        />
      </Section>
      <Chapter
        emoji="🔔"
        title="Global event listeners"
        path="global-event-listeners"
        element={<UseGlobalEvents />}
      />
      <Chapter
        emoji="⏱"
        title="useEffect + setInterval"
        path="useeffect-setinterval"
        element={<UseEffectAndInterval />}
      />
      <Chapter
        emoji="🌐"
        title="Fetch data in useEffect"
        path="fetch-data-useeffect"
        element={<FetchDataInUseEffect />}
      />
      <Chapter
        emoji="🔃"
        title="Beware of infinite loops"
        path="beware-of-infinite-loops"
        element={<BewareOfInfiniteLoops />}
      />
      <Chapter
        emoji="💾"
        title="You don't need useEffect"
        path="no-need-to-useeffect"
        element={<YouDontNeedUseEffect />}
      />
      <Section title="useLayoutEffect">
        <Chapter
          emoji="🪢"
          title="Effects sequence"
          path="effects-sequence"
          element={<EffectsSequence />}
        />
        <Chapter
          emoji="📨"
          title="Batching effects"
          path="batching-effects"
          element={<UseLayoutEffectExample />}
        />
      </Section>
    </Section>
  );
}
