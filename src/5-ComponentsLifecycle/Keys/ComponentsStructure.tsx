import { ChapterWrapper, EmojiButton, LoggedLifecycle, TextBlock, Toolbar } from 'components';
import { useToggle } from 'hooks/useToggle';

export function ComponentsStructure() {
    const [isToggled, toggle] = useToggle(true);

    const hedgehog = (
        <LoggedLifecycle key="🦔" tag="🦔">
            <EmojiButton emoji="🦔" onClick={toggle} />
        </LoggedLifecycle>
    );

    return (
        <ChapterWrapper title="Components structure" subtitle="Key property">
            <TextBlock type="info">
                <div>
                    ℹ️ <code>key</code> property only makes sense in the scope of a single parent.
                </div>
                <div>ℹ️ Changes in a components tree will cause mounts and unmounts.</div>
            </TextBlock>

            <h3>{isToggled ? 'Click the hedgehog!' : 'Nicely done! Now do it again.'}</h3>
            <Toolbar>
                {isToggled ? hedgehog : <div style={{ transform: 'scaleX(-1)' }}>{hedgehog}</div>}
            </Toolbar>
        </ChapterWrapper>
    );
}
