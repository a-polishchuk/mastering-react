import { Chapter, Section } from 'components/MasterDetail';

import { ConditionalRendering } from './Keys/ConditionalRendering';
import { KeysAndLists } from './Keys/KeysAndLists/KeysAndLists';
import { RemountComponent } from './Keys/RemountComponent';
import { LifecycleAndMemoization } from './Memoization/LifecycleAndMemoization';
import { RandomRendering } from './RandomRendering/RandomRendering';

// TODO: add section name to the path
export function ComponentsLifecycleSection(): JSX.Element {
  return (
    <Section title="Components lifecycle">
      <Section title="Key property">
        <Chapter
          emoji="🔑"
          title="Keys and lists"
          path="keys-and-lists"
          element={<KeysAndLists />}
        />
        <Chapter
          emoji="🔑"
          title="Re-mount component"
          path="remount-component"
          element={<RemountComponent />}
        />
        <Chapter
          emoji="🔑"
          title="Conditional rendering"
          path="conditional-rendering"
          element={<ConditionalRendering />}
        />
      </Section>
      <Chapter
        emoji="🎲"
        title="Random rendering"
        path="random-rendering"
        element={<RandomRendering />}
      />
      <Chapter
        emoji="🔄"
        title="Lifecycle and memoization"
        path="lifecycle-and-memoization"
        element={<LifecycleAndMemoization />}
      />
    </Section>
  );
}
