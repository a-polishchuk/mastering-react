import { ChapterWrapper, EmojiButton, LoggedLifecycle, Toolbar } from 'components';
import { useToggle } from 'hooks/useToggle';

export function ComponentsStructure(): JSX.Element {
  const [isToggled, toggle] = useToggle(true);

  // note that event settings the same key property won't help
  // key only make sense in the scope of a single parent
  const hedgehog = (
    <LoggedLifecycle key="🦔" tag="🦔">
      <EmojiButton emoji="🦔" onClick={toggle} />
    </LoggedLifecycle>
  );

  return (
    <ChapterWrapper title="Key property" subtitle="Components structure">
      <h3>{isToggled ? 'Click the hedgehog!' : 'Nicely done! Now do it again.'}</h3>
      <Toolbar>
        {isToggled ? hedgehog : <div style={{ transform: 'scaleX(-1)' }}>{hedgehog}</div>}
      </Toolbar>
    </ChapterWrapper>
  );
}
