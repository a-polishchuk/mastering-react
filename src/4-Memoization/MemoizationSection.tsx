import { Section, Chapter } from 'components/MasterDetail';

import { ListWithoutMemoization } from './ListWithoutMemoization/ListWithoutMemoization';
import { ListWithMemoization } from './ListWithMemoization/ListWithMemoization';
import { UseUpdateEffectExample } from './UseUpdateEffect/UseUpdateEffectExample';
import { WhenReactRenderComponents } from './UseMemo/WhenReactRenderComponents';
import { UseMemoExample } from './UseMemo/UseMemoExample';
import { KeysToReact } from './KeysToReact/KeysToReact';

export function MemoizationSection() {
  return (
    <Section title="Memoization">
      <Section title="useCallback">
        <Chapter title="List without memoization" component={ListWithoutMemoization} />
        <Chapter title="List with memoization" component={ListWithMemoization} />
        <Chapter title="useUpdateEffect" component={UseUpdateEffectExample} />
      </Section>
      <Section title="useMemo">
        <Chapter title="When React render components?" component={WhenReactRenderComponents} />
        <Chapter title="useMemo" component={UseMemoExample} />
      </Section>
      <Section title="Key property">
        <Chapter title="Keys to React" component={KeysToReact} />
      </Section>
    </Section>
  );
}
