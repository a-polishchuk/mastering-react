import { Chapter, Section } from 'components';

import { ControlledInput } from './ControlledVsUncontrolled/ControlledInput';
import { UncontrolledInput } from './ControlledVsUncontrolled/UncontrolledInput';
import { UseImperativeHandle } from './ImperativeHandle/UseImperativeHandle';
import { RockScissorsPaper } from './RockScissorsPaper/RockScissorsPaper';
import { StoringStateInUseRef } from './StoringStateInUseRef/StoringStateInUseRef';

export function ImperativeCodeSection(): JSX.Element {
  return (
    <Section title="Imperative code, useRef">
      <Section title="Controlled vs uncontrolled">
        <Chapter
          emoji="🟢"
          title="Controlled input"
          path="controlled-input"
          element={<ControlledInput />}
        />
        <Chapter
          emoji="🔴"
          title="Uncontrolled input"
          path="uncontrolled-input"
          element={<UncontrolledInput />}
        />
      </Section>
      <Chapter
        emoji="✊"
        title="Rock scissors paper"
        path="rock-scissors-paper"
        element={<RockScissorsPaper />}
      />
      <Chapter
        emoji="📦"
        title="Storing state in useRef"
        path="storing-state-in-useref"
        element={<StoringStateInUseRef />}
      />
      <Chapter
        emoji="👉🏼"
        title="useImperativeHandle"
        path="use-imperative-handle"
        element={<UseImperativeHandle />}
      />
    </Section>
  );
}
