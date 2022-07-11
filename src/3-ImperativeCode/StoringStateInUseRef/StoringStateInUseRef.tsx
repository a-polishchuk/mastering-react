import { useCounter } from '1-HooksBasics/CustomHooks/useCounter';
import { Button } from 'components/Button';
import { ChapterHeader } from 'components/ChapterHeader';
import { Toolbar } from 'components/Toolbar';
import { ValueLabel } from 'components/ValueLabel';
import { useEffect } from 'react';

import { useUpdateEffect } from './useUpdateEffect';

export function StoringStateInUseRef(): JSX.Element {
  const { value, increase } = useCounter();

  useEffect(() => {
    console.log('useEffect after first render');
  }, []);

  useUpdateEffect(() => {
    console.log(`useUpdateEffect, value: ${value}`);
  }, [value]);

  console.log('render');

  return (
    <>
      <ChapterHeader title="Storing state in useRef" subtitle="useUpdateEffect" />
      <Toolbar>
        <div style={{ minWidth: 100, marginLeft: 20 }}>
          <ValueLabel value={value} />
        </div>
        <Button text="+1" onClick={increase} />
      </Toolbar>
    </>
  );
}
