import { Button } from 'components/Button';
import { ChapterHeader } from 'components/ChapterHeader';
import { ColoredBlock } from 'components/ColoredBlock';
import { LoggedLifecycle } from 'components/LoggedLifecycle';
import { Toolbar } from 'components/Toolbar';
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
