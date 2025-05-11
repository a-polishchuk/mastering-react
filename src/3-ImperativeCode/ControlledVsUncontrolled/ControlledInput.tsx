import { Button, ChapterWrapper, RelatedDocs, TextBlock, Toolbar } from 'components';
import capitalize from 'lodash/capitalize';
import { ChangeEventHandler, useRef, useState } from 'react';

export function ControlledInput() {
    const [text, setText] = useState<string>('');
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setText(event.target.value);
    };

    const clear = () => {
        setText('');
    };

    const toUpperCase = () => {
        setText((value) => value.toUpperCase());
    };

    const toCapitalCase = () => {
        setText((value) => capitalize(value));
    };

    const focus = () => {
        inputRef.current?.focus();
    };

    return (
        <ChapterWrapper title="Controlled input" subtitle="Controlled vs uncontrolled">
            <TextBlock type="success">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    ✅ State is managed by React (Virutal DOM side)
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

            <RelatedDocs
                docs={[
                    {
                        label: 'Manipulating the DOM with Refs',
                        href: 'https://react.dev/learn/manipulating-the-dom-with-refs',
                    },
                ]}
            />
        </ChapterWrapper>
    );
}
