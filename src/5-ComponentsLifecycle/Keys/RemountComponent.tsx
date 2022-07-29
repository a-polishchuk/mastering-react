import { Button } from 'components';
import { ChapterHeader } from 'components';
import { ColoredBlock } from 'components';
import { LoggedLifecycle } from 'components';
import { Toolbar } from 'components';
import { useRerender } from 'hooks/useRerender';

function generateRandomKey() {
  return Math.random().toString();
}

export function RemountComponent(): JSX.Element {
  const rerender = useRerender();

  return (
    <>
      <ChapterHeader title="Key property" subtitle="Re-mount component" />

      <Toolbar>
        <Button text="Click me to re-render the component" onClick={rerender} />
      </Toolbar>

      <LoggedLifecycle key={generateRandomKey()} tag="Random key">
        <ColoredBlock>I have a randomly generated key.</ColoredBlock>
      </LoggedLifecycle>
    </>
  );
}
