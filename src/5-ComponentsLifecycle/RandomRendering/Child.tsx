import { ColoredBlock } from 'components';
import { LoggedLifecycle } from 'components';

export function Child({ tag }: { tag: string }): JSX.Element {
  return (
    <LoggedLifecycle tag={tag}>
      <ColoredBlock style={{ fontSize: 48 }}>{tag}</ColoredBlock>
    </LoggedLifecycle>
  );
}
