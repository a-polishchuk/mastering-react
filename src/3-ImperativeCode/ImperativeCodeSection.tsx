import { Chapter, Section } from 'components';
import { RouterPath } from 'config/RouterPath';

import { ControlledInput } from './ControlledVsUncontrolled/ControlledInput';
import { UncontrolledInput } from './ControlledVsUncontrolled/UncontrolledInput';
import { UseImperativeHandle } from './ImperativeHandle/UseImperativeHandle';
import { RockScissorsPaper } from './RockScissorsPaper/RockScissorsPaper';
import { StoringStateInUseRef } from './StoringStateInUseRef/StoringStateInUseRef';

export function ImperativeCodeSection() {
  return (
    <Section title="Imperative code, useRef">
      <Section title="Controlled vs uncontrolled">
        <Chapter
          emoji="🟢"
          title="Controlled input"
          path={RouterPath.CONTROLLED_INPUT}
          element={<ControlledInput />}
        />
        <Chapter
          emoji="🔴"
          title="Uncontrolled input"
          path={RouterPath.UNCONTROLLED_INPUT}
          element={<UncontrolledInput />}
        />
      </Section>
      <Chapter
        emoji="✊"
        title="Rock scissors paper"
        path={RouterPath.ROCK_SCISSORS_PAPER}
        element={<RockScissorsPaper />}
      />
      <Chapter
        emoji="📦"
        title="Storing state in useRef"
        path={RouterPath.STORING_STATE_IN_USEREF}
        element={<StoringStateInUseRef />}
      />
      <Chapter
        emoji="👉🏼"
        title="useImperativeHandle"
        path={RouterPath.USE_IMPERATIVE_HANDLE}
        element={<UseImperativeHandle />}
      />
    </Section>
  );
}
