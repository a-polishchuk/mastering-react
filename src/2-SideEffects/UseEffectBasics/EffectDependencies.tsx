import { useCounter } from '1-HooksBasics/CustomHooks/useCounter';
import { ChapterHeader } from 'components/ChapterHeader';
import { Toolbar } from 'components/Toolbar';
import { useEffect, useState } from 'react';
import { logTagged } from 'utils/logTagged';

import { Counter } from './Counter';

const DELTA = 1;

export function EffectDependencies(): JSX.Element {
  const { value, increase, decrease } = useCounter(0, DELTA);
  const [inputValue, setInputValue] = useState<string>('Count:');

  useEffect(() => {
    logTagged('Effect', `running effect ${value}`);

    // optional cleanup function
    return () => {
      logTagged('Effect', `cleaning up ${value}`);
    };
  }, [value]);

  useEffect(
    function updateDocTitle() {
      document.title = `${inputValue} ${value}`;
    },
    [inputValue, value]
  );

  return (
    <>
      <ChapterHeader title="useEffect basics" subtitle="Effect dependencies" />
      <Counter value={value} delta={DELTA} increase={increase} decrease={decrease} />
      <Toolbar>
        <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      </Toolbar>
    </>
  );
}