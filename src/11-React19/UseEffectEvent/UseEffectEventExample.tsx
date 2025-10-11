import { ChapterWrapper, RelatedDocs, TextBlock } from 'components';
import { useEffect, useState } from 'react';
import { Color, Palette } from './Palette';
import classes from './UseEffectEventExample.module.css';

export function UseEffectEventExample() {
    const [selectedColor, setSelectedColor] = useState<Color>('aqua');

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            console.log(`%c● %c${e.key}`, `color:${selectedColor};font-size:20px;`, 'color:black');
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedColor]);

    return (
        <ChapterWrapper
            title="useEffectEvent"
            subtitle="New hooks in React 19.2"
            contentClassName={classes.root}
        >
            <TextBlock type="info">Тицяйте по клавіатурі і дивіться в консоль</TextBlock>

            <Palette selectedColor={selectedColor} onColorChange={setSelectedColor} />

            <RelatedDocs
                docs={[
                    {
                        label: 'useEffectEvent',
                        href: 'https://react.dev/reference/react/useEffectEvent',
                    },
                ]}
            />
        </ChapterWrapper>
    );
}
