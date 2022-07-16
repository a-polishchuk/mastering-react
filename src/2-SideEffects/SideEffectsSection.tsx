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
        <Chapter title="Component lifecycle" component={ComponentLifecycle} />
        <Chapter title="Effect dependencies" component={EffectDependencies} />
        <Chapter title="Local storage sync" component={LocalStorageSync} />
      </Section>
      <Chapter title="Global event listeners" component={UseGlobalEvents} />
      <Chapter title="useEffect + setInterval" component={UseEffectAndInterval} />
      <Chapter title="Fetch data in useEffect" component={FetchDataInUseEffect} />
      <Chapter title="Beware of infinite loops" component={BewareOfInfiniteLoops} />
      <Chapter title="You don't need useEffect" component={YouDontNeedUseEffect} />
      <Section title="useLayoutEffect">
        <Chapter title="Effects sequence" component={EffectsSequence} />
        <Chapter title="Batching effects" component={UseLayoutEffectExample} />
      </Section>
    </Section>
  );
}
