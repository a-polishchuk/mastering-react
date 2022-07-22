import { Button } from 'components/Button';
import { ChapterHeader } from 'components/ChapterHeader';
import { Toolbar } from 'components/Toolbar';
import { ValueLabel } from 'components/ValueLabel';
import { ChangeEventHandler, useState } from 'react';

const FIBONACCI = [1, 1];

export function UseStateBasics(): JSX.Element {
  const [clicks, setClicks] = useState<number>(0);
  const [isClicksVisible, setClicksVisible] = useState<boolean>(true);
  const [someText, setSomeText] = useState<string>('');
  const [fibonacci, setFibonacci] = useState<number[]>(FIBONACCI);

  const incrementCounter = () => setClicks(clicks + 1);
  const showClicks = () => setClicksVisible(true);
  const hideClicks = () => setClicksVisible(false);

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSomeText(event.target.value);
  };
  const clearText = () => setSomeText('');

  const addFibonacci = () => {
    const copy = [...fibonacci];
    const lastIdx = copy.length - 1;
    copy.push(copy[lastIdx] + copy[lastIdx - 1]);
    setFibonacci(copy);
  };

  return (
    <>
      <ChapterHeader title="useState basics" subtitle="General hooks rules" />

      <Toolbar>
        <ValueLabel value={isClicksVisible ? clicks : '?'} minWidth={100} />
        <Button onClick={incrementCounter} text="Increment counter" />
        <Button onClick={showClicks} text="Show clicks" disabled={isClicksVisible} />
        <Button onClick={hideClicks} text="Hide clicks" disabled={!isClicksVisible} />
      </Toolbar>

      <Toolbar>
        <input type="text" value={someText} onChange={onInputChange} />
        <Button text="Clear" onClick={clearText} />
      </Toolbar>

      <Toolbar>
        <Button text="Add Fibonacci number" onClick={addFibonacci} />
      </Toolbar>
      <div>Fibonacci sequence: {fibonacci.join(', ')}</div>
    </>
  );
}
