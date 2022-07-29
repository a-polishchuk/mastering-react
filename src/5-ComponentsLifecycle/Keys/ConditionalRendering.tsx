import { Button } from 'components';
import { ChapterHeader } from 'components/ChapterHeader';
import { LoggedLifecycle } from 'components/LoggedLifecycle';
import { Toolbar } from 'components/Toolbar';
import { useToggle } from 'hooks/useToggle';

export function ConditionalRendering(): JSX.Element {
  const [isToggled, toggle] = useToggle(true);

  return (
    <>
      <ChapterHeader title="Key property" subtitle="Conditional rendering" />

      <Toolbar>
        <Button text="Toggle" onClick={toggle} />
      </Toolbar>

      <div style={{ fontSize: 48 }}>
        {isToggled ? (
          <LoggedLifecycle tag="giraffe">🦒</LoggedLifecycle>
        ) : (
          <>
            <LoggedLifecycle tag="shark">🦈</LoggedLifecycle>
            <LoggedLifecycle tag="hedgehog">🦔</LoggedLifecycle>
          </>
        )}
      </div>
    </>
  );
}
