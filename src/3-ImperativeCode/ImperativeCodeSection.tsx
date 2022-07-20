import { Chapter, Section } from 'components/MasterDetail';

import { ControlledInput } from './ControlledVsUncontrolled/ControlledInput';
import { UncontrolledInput } from './ControlledVsUncontrolled/UncontrolledInput';
import { UseImperativeHandle } from './ImperativeHandle/UseImperativeHandle';
import { RockScissorsPaper } from './RockScissorsPaper/RockScissorsPaper';
import { StoringStateInUseRef } from './StoringStateInUseRef/StoringStateInUseRef';

export function ImperativeCodeSection(): JSX.Element {
  return (
    <Section title="Imperative code, useRef">
      <Section title="Controlled vs uncontrolled">
        <Chapter title="🟢 Controlled input" component={ControlledInput} />
        <Chapter title="🔴 Uncontrolled input" component={UncontrolledInput} />
      </Section>
      <Chapter title="✊ Rock scissors paper" component={RockScissorsPaper} />
      <Chapter title="📦 Storing state in useRef" component={StoringStateInUseRef} />
      <Chapter title="👉🏼 useImperativeHandle" component={UseImperativeHandle} />
    </Section>
  );
}
