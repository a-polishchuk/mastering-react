import { Button } from 'components';
import { ChapterHeader } from 'components/ChapterHeader';
import { Toolbar } from 'components/Toolbar';
import { capitalize } from 'lodash';
import { ChangeEventHandler, useRef, useState } from 'react';

export function UncontrolledInput(): JSX.Element {
  const [text, setText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => setText(event.target.value);

  const clear = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const toUpperCase = () => {
    if (inputRef.current) {
      inputRef.current.value = inputRef.current.value.toUpperCase();
    }
  };

  const toCapitalCase = () => {
    if (inputRef.current) {
      inputRef.current.value = capitalize(inputRef.current.value);
    }
  };

  const focus = () => inputRef.current?.focus();

  return (
    <>
      <ChapterHeader title="Controlled vs uncontrolled" subtitle="Uncontrolled input" />
      <p>
        <span style={{ fontSize: 24 }}>ℹ️</span> State is managed by real DOM
      </p>

      <Toolbar>
        <input ref={inputRef} type="text" defaultValue="default text" onChange={handleChange} />
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
    </>
  );
}
