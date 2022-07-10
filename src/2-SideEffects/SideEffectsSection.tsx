import { Chapter, Section } from 'components/MasterDetail';

import { FetchDataInUseEffect } from './FetchDataInUseEffect';
import { BewareOfInfiniteLoops } from './InfiniteLoops/BewareOfInfiniteLoops';
import { UseEffectAndInterval } from './UseEffectAndInterval/UseEffectAndInterval';
import { UseEffectBasics } from './UseEffectBasics';
import { EffectsSequence } from './UseLayoutEffect/EffectsSequence';
import { UseLayoutEffectExample } from './UseLayoutEffect/UseLayoutEffectExample';
import { YouDontNeedUseEffect } from './YouDontNeedUseEffect/YouDontNeedUseEffect';

export function SideEffectsSection(): JSX.Element {
  return (
    <Section title="Side effects, useEffect">
      <Chapter title="useEffect basics" component={UseEffectBasics} />
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
