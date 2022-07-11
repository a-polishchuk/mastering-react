import { useCounter } from '1-HooksBasics/CustomHooks/useCounter';
import { Button } from 'components/Button';
import { ChapterHeader } from 'components/ChapterHeader';
import { useLoggedLifecycle } from 'components/LoggedLifecycle';
import { Toolbar } from 'components/Toolbar';
import { ValueLabel } from 'components/ValueLabel';
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
        <div style={{ minWidth: 100, marginLeft: 20 }}>
          <ValueLabel value={value} />
        </div>
        <Button text="+1" onClick={increase} />
      </Toolbar>
    </>
  );
}
