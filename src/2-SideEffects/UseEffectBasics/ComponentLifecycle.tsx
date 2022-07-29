import { useCounter } from '1-HooksBasics/CustomHooks/useCounter';
import { ChapterHeader } from 'components';
import { useEffect } from 'react';
import { logTagged } from 'utils/logTagged';

import { Counter } from './Counter';

const DELTA = 1;

export function ComponentLifecycle(): JSX.Element {
  const { value, increase, decrease } = useCounter(0, DELTA);

  useEffect(() => {
    logTagged('useEffect', 'component did mount');

    // optional cleanup function
    return () => {
      logTagged('useEffect', 'component will unmount');
    };
  }, []);

  useEffect(() => {
    logTagged('one more effect', 'component did mount');
  }, []);

  useEffect(() => {
    logTagged('effect with no deps', 'executed AFTER each render');
  }); // ! deps list is missing

  logTagged('Render', 'render function was called by React');

  return (
    <>
      <ChapterHeader title="useEffect basics" subtitle="Component lifecycle" />
      <Counter value={value} delta={DELTA} increase={increase} decrease={decrease} />
    </>
  );
}
