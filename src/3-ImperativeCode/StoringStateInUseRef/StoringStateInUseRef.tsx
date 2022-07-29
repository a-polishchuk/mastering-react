import { useCounter } from '1-HooksBasics/CustomHooks/useCounter';
import { Button } from 'components';
import { ChapterHeader } from 'components/ChapterHeader';
import { useLoggedLifecycle } from 'components/LoggedLifecycle';
import { Toolbar } from 'components/Toolbar';
import { ValueLabel } from 'components/ValueLabel';
import { logTagged } from 'utils/logTagged';

import { useRefState } from './useRefState';
import { useUpdateEffect } from './useUpdateEffect';

export function StoringStateInUseRef(): JSX.Element {
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
    <>
      <ChapterHeader title="Storing state in useRef" subtitle="useUpdateEffect" />

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
    </>
  );
}
