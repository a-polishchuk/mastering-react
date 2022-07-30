import { Button, ChapterWrapper, TextBlock, Toolbar } from 'components';
import { capitalize } from 'lodash';
import { ChangeEventHandler, useRef, useState } from 'react';

export function ControlledInput(): JSX.Element {
  const [text, setText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => setText(event.target.value);

  const clear = () => setText('');

  const toUpperCase = () => setText((value) => value.toUpperCase());

  const toCapitalCase = () => setText((value) => capitalize(value));

  const focus = () => inputRef.current?.focus();

  return (
    <ChapterWrapper title="Controlled vs uncontrolled" subtitle="Controlled input">
      <TextBlock>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 24 }}>ℹ️</span> State is managed by React (Virutal DOM side)
        </div>
      </TextBlock>

      <Toolbar>
        <input ref={inputRef} type="text" value={text} onChange={handleChange} />
      </Toolbar>

      <Toolbar>
        <Button text="Clear" onClick={clear} />
        <Button text="To upper case" onClick={toUpperCase} />
        <Button text="Capitalize" onClick={toCapitalCase} />
        <Button text="Focus" onClick={focus} />
      </Toolbar>

      <Toolbar>
        Current value: <strong>{text}</strong>
      </Toolbar>
    </ChapterWrapper>
  );
}
