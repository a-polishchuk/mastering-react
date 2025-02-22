import { Button, ChapterWrapper, Toolbar } from 'components';
import { RelatedDocs } from 'components/RelatedDocs/RelatedDocs';
import { useRef, useState } from 'react';
import { PinInput, PinInputHandle } from './PinInput';

const initialDigits = ['', '', '', ''];

export function UseImperativeHandle() {
    const [digits, setDigits] = useState<string[]>(initialDigits);
    const ref = useRef<PinInputHandle | null>(null);

    const focus = () => {
        ref.current?.focus();
    };

    const clear = () => {
        setDigits(initialDigits);
    };

    return (
        <ChapterWrapper title="useImperativeHandle" subtitle="PinInput component">
            <Toolbar>
                <PinInput ref={ref} digits={digits} onChange={setDigits} />
            </Toolbar>

            <Toolbar>
                <Button text="Focus" onClick={focus} />
                <Button text="Clear" onClick={clear} />
            </Toolbar>

            <RelatedDocs
                docs={[
                    {
                        label: 'useImperativeHandle Hook Reference',
                        href: 'https://react.dev/reference/react/useImperativeHandle',
                    },
                ]}
            />
        </ChapterWrapper>
    );
}
