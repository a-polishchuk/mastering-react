import { Section, Chapter } from 'components/MasterDetail';

import { ListWithoutMemoization } from './ListWithoutMemoization/ListWithoutMemoization';
import { ListWithMemoization } from './ListWithMemoization/ListWithMemoization';
import { UseUpdateEffect } from './UseUpdateEffect/UseUpdateEffectExample';
import { WhenReactRenderComponents } from './UseMemo/WhenReactRenderComponents';
import { UseMemoExample } from './UseMemo/UseMemoExample';

export function MemoizationSection(): JSX.Element {
  return (
    <Section title="Memoization">
      <Section title="useCallback">
        <Chapter title="📋 List without memoization" component={ListWithoutMemoization} />
        <Chapter title="📋 List with memoization" component={ListWithMemoization} />
        <Chapter title="📬 useUpdateEffect" component={UseUpdateEffect} />
      </Section>
      <Section title="useMemo">
        <Chapter title="📽 When React render components?" component={WhenReactRenderComponents} />
        <Chapter title="💾 useMemo" component={UseMemoExample} />
      </Section>
    </Section>
  );
}
