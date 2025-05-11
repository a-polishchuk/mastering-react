import { Button, ChapterWrapper, RelatedDocs, TextBlock, Toolbar } from 'components';
import capitalize from 'lodash/capitalize';
import { ChangeEventHandler, useRef, useState } from 'react';

export function UncontrolledInput() {
    const [text, setText] = useState<string>('');
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setText(event.target.value);
    };

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

    const focus = () => {
        inputRef.current?.focus();
    };

    return (
        <ChapterWrapper title="Uncontrolled input" subtitle="Controlled vs uncontrolled">
            <TextBlock type="warning" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                ⚠️ State is managed by real DOM
            </TextBlock>

            <Toolbar>
                <input
                    ref={inputRef}
                    type="text"
                    defaultValue="default text"
                    onChange={handleChange}
                />
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
