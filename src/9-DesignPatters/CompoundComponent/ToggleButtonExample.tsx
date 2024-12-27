import { ChapterWrapper } from 'components';
import { useState } from 'react';
import { ToggleButton } from './ToggleButton';
import { ToggleOption } from './ToggleOption';

export function ToggleButtonExample() {
    const [value, setValue] = useState<string>('One');

    return (
        <ChapterWrapper title="Toggle button" subtitle="Compound component">
            <ToggleButton value={value} onChange={setValue}>
                <ToggleOption key={1} option="One" />
                <ToggleOption key={2} option="Two" />
                <ToggleOption key={3} option="Three" label="3️⃣" />
                <ToggleOption key={4} option="Four" label="4" />
            </ToggleButton>
        </ChapterWrapper>
    );
}
