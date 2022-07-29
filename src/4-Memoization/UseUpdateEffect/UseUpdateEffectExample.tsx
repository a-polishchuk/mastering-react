import { useCounter } from '1-HooksBasics/CustomHooks/useCounter';
import { Button } from 'components';
import { ChapterHeader } from 'components';
import { useLoggedLifecycle } from 'hooks/useLoggedLifecycle';
import { Toolbar } from 'components';
import { ValueLabel } from 'components';
import { useCallback, useEffect } from 'react';
import { logTagged } from 'utils/logTagged';

import { useUpdateEffect } from './useUpdateEffect';

export function UseUpdateEffect(): JSX.Element {
  const { value, increase } = useCounter();

  useLoggedLifecycle('Parent');

  useEffect(() => {
    logTagged('useEffect', 'effect with empty deps list');
  }, []);

  useUpdateEffect(
    useCallback(() => {
      logTagged('updateEffect', `value === ${value}`);
    }, [value])
  );

  return (
    <>
      <ChapterHeader title="useCallback" subtitle="useUpdateEffect" />

      <Toolbar>
        <ValueLabel value={value} minWidth="100px" />
        <Button text="+1" onClick={increase} />
      </Toolbar>
    </>
  );
}
