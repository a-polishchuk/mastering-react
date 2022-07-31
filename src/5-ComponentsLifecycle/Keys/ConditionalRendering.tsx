import { Button, ChapterWrapper, LoggedLifecycle, Toolbar } from 'components';
import { useToggle } from 'hooks/useToggle';

export function ConditionalRendering(): JSX.Element {
  const [isToggled, toggle] = useToggle(true);

  return (
    <ChapterWrapper title="Key property" subtitle="Conditional rendering">
      <Toolbar>
        <Button text="Toggle" onClick={toggle} />
      </Toolbar>

      <div style={{ fontSize: 48 }}>
        {isToggled ? (
          <LoggedLifecycle tag="🦒">🦒</LoggedLifecycle>
        ) : (
          <>
            <LoggedLifecycle tag="🦈">🦈</LoggedLifecycle>
            <LoggedLifecycle tag="🦔">🦔</LoggedLifecycle>
          </>
        )}
      </div>
    </ChapterWrapper>
  );
}
