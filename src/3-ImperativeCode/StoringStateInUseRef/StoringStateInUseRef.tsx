import { useCounter } from '1-HooksBasics/CustomHooks/useCounter';
import { Button, ChapterWrapper, Toolbar, ValueLabel } from 'components';
import { useLoggedLifecycle } from 'hooks/useLoggedLifecycle';
import { logTagged } from 'utils/logTagged';
import { useRefState } from './useRefState';
import { useUpdateEffect } from './useUpdateEffect';

export function StoringStateInUseRef() {
    const { value: stateClicks, increase: increaseStateClicks } = useCounter();
    const [refStateClicks, setRefStateClicks] = useRefState<number>(0);

    useLoggedLifecycle('Main');

    useUpdateEffect(() => {
        logTagged('useUpdateEffect', `value: ${stateClicks}`);
    }, [stateClicks]);

    const increaseRefStateClicks = () => {
        setRefStateClicks((value) => value + 1);
        logTagged('useRefState', 'increase ref state');
    };

    return (
        <ChapterWrapper title="Storing state in useRef" subtitle="useUpdateEffect">
            <div>useState clicks:</div>
            <Toolbar>
                <ValueLabel value={stateClicks} minWidth="100px" />
                <Button text="+1" onClick={increaseStateClicks} />
            </Toolbar>

            <div>useRefState clicks:</div>
            <Toolbar>
                <ValueLabel value={refStateClicks} minWidth="100px" />
                <Button text="+1" onClick={increaseRefStateClicks} />
            </Toolbar>
        </ChapterWrapper>
    );
}
