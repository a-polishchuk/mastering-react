import { Button, ChapterWrapper, Toolbar } from 'components';
import { useElementSize } from 'hooks/useElementSize';
import { useState } from 'react';
import { cn } from 'utils/cn';
import { generateRandomColor } from 'utils/generateRandomColor';
import classes from './UseElementSize.module.css';

export function UseElementSizeExample() {
    const [size, refCallback] = useElementSize();
    const [width, height] = size;
    const [dummiesCount, setDummiesCount] = useState<number>(0);

    const addDummy = () => {
        setDummiesCount((val) => val + 1);
    };

    const removeDummy = () => {
        setDummiesCount((val) => Math.max(val - 1, 0));
    };

    const dummies = Array.from({ length: dummiesCount }, (_, index) => (
        <div key={index} className={cn(classes.node, classes.dummy)}>
            Dummy
        </div>
    ));

    return (
        <ChapterWrapper title="useElementSize" subtitle="More custom hooks">
            <Toolbar>
                <Button text="Add dummy" onClick={addDummy} />
                <Button text="Remove dummy" onClick={removeDummy} />
            </Toolbar>

            <div className={classes.container}>
                <div
                    ref={refCallback}
                    className={classes.node}
                    style={{ backgroundColor: generateRandomColor() }}
                >
                    {width.toFixed(0)} x {height.toFixed(0)}
                </div>
                {dummies}
            </div>
        </ChapterWrapper>
    );
}
