import { Chapter, Section } from 'components';
import { RouterPath } from 'config/RouterPath';

import { ComponentsStructure } from './Keys/ComponentsStructure';
import { KeysAndLists } from './Keys/KeysAndLists/KeysAndLists';
import { RemountComponent } from './Keys/RemountComponent';
import { LifecycleAndMemoization } from './Memoization/LifecycleAndMemoization';
import { RandomRendering } from './RandomRendering/RandomRendering';

export function ComponentsLifecycleSection(): JSX.Element {
  return (
    <Section title="Components lifecycle">
      <Section title="Key property">
        <Chapter
          emoji="🔑"
          title="Keys and lists"
          path={RouterPath.KEYS_AND_LISTS}
          element={<KeysAndLists />}
        />
        <Chapter
          emoji="🔑"
          title="Re-mount component"
          path={RouterPath.KEYS_REMOUNT_COMPONENT}
          element={<RemountComponent />}
        />
        <Chapter
          emoji="🔑"
          title="Components structure"
          path={RouterPath.KEYS_COMPONENTS_STRUCTURE}
          element={<ComponentsStructure />}
        />
      </Section>
      <Chapter
        emoji="🎲"
        title="Random rendering"
        path={RouterPath.RANDOM_RENDERING}
        element={<RandomRendering />}
      />
      <Chapter
        emoji="🔄"
        title="Lifecycle and memoization"
        path={RouterPath.LIFECYCLE_AMD_MEMOIZATION}
        element={<LifecycleAndMemoization />}
      />
    </Section>
  );
}
