import { Button, ChapterWrapper, ValueLabel } from 'components';

import { useCounter } from './useCounter';

function ClicksCounter(): JSX.Element {
  const { value: clicks, increase } = useCounter(0, 5);
  const text = 'Click me! '.repeat(clicks + 1);
  return (
    <div style={{ padding: 16, cursor: 'pointer', userSelect: 'none' }} onClick={() => increase()}>
      {text}
    </div>
  );
}

function DecadePicker({ initialValue }: { initialValue: number }): JSX.Element {
  const { value: year, increase, decrease } = useCounter(initialValue, 10);
  return (
    <div style={{ padding: 10 }}>
      <div style={{ fontSize: 24 }}>Pick a decade:</div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <Button onClick={() => decrease()} text="➖" />
        <ValueLabel value={`${year}'s`} />
        <Button onClick={() => increase()} text="➕" />
      </div>
    </div>
  );
}

export function UseCounterExample(): JSX.Element {
  return (
    <ChapterWrapper title="useCounter" subtitle="First custom hooks">
      <ClicksCounter />
      <DecadePicker initialValue={1970} />
    </ChapterWrapper>
  );
}
