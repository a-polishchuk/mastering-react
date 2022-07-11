import { ColoredBlock } from 'components/ColoredBlock';
import { LoggedLifecycle } from 'components/LoggedLifecycle';

export function Child({ tag }: { tag: string }): JSX.Element {
  return (
    <LoggedLifecycle tag={tag}>
      <ColoredBlock style={{ fontSize: 48 }}>{tag}</ColoredBlock>
    </LoggedLifecycle>
  );
}
