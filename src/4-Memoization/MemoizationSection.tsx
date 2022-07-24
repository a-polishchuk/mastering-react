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
        <Chapter
          emoji="🌉"
          title="List without memoization"
          path="list-withouth-memoization"
          element={<ListWithoutMemoization />}
        />
        <Chapter
          emoji="🌁"
          title="List with memoization"
          path="list-with-memoization"
          element={<ListWithMemoization />}
        />
        <Chapter
          emoji="📬"
          title="useUpdateEffect"
          path="use-update-effect"
          element={<UseUpdateEffect />}
        />
      </Section>
      <Section title="useMemo">
        <Chapter
          emoji="📽"
          title="When React render components?"
          path="when-react-renders"
          element={<WhenReactRenderComponents />}
        />
        <Chapter emoji="💾" title="useMemo" path="use-memo" element={<UseMemoExample />} />
      </Section>
    </Section>
  );
}
