import { Button } from 'components/Button';
import { ChapterHeader } from 'components/ChapterHeader';
import { Toolbar } from 'components/Toolbar';
import { ValueLabel } from 'components/ValueLabel';
import { useState } from 'react';

const DELAY = 2000;
const FIBONACCI = [1, 1];

export function PreviousStateUpdate(): JSX.Element {
  const [clicks, setClicks] = useState<number>(0);
  const [isClicksVisible, setClicksVisible] = useState<boolean>(true);
  const [fibonacci, setFibonacci] = useState<number[]>(FIBONACCI);

  const incrementCounter = () => {
    setTimeout(() => setClicks(clicks + 1), DELAY);
  };

  const incrementWithDelay = () => {
    setTimeout(() => setClicks((prevClicks) => prevClicks + 1), DELAY);
  };

  const toggleShowClicks = () => {
    setClicksVisible((prevValue) => !prevValue);
  };

  const addFibonacci = () => {
    setFibonacci((array) => {
      const copy = [...array];
      const lastIdx = copy.length - 1;
      copy.push(copy[lastIdx] + copy[lastIdx - 1]);
      return copy;
    });
  };

  return (
    <>
      <ChapterHeader title="useState" subtitle="Previous state update" />

      <Toolbar>
        <div style={{ minWidth: 150, marginLeft: 16 }}>
          <ValueLabel value={isClicksVisible ? clicks : '?'} />
        </div>
        <Button onClick={incrementCounter} text="Increment counter" />
        <Button onClick={incrementWithDelay} text="Increment with delay" />
        <Button onClick={toggleShowClicks} text="Toggle show clicks" />
      </Toolbar>

      <Toolbar>
        <Button text="Add Fibonacci number" onClick={addFibonacci} />
      </Toolbar>
      <div>Fibonacci sequence: {fibonacci.join(', ')}</div>
    </>
  );
}
