import classNames from 'classnames';
import { Button, ChapterWrapper, Toolbar } from 'components';
import { useElementSize } from 'hooks/useElementSize';
import { ReactElement } from 'react';
import { CSSProperties, useState } from 'react';
import { generateRandomColor } from 'utils/generateRandomColor';
import classes from './UseElementSize.module.css';

export function UseElementSizeExample() {
    const [size, refCallback] = useElementSize();
    const [width, height] = size;
    const [dummiesCount, setDummiesCount] = useState<number>(0);

    const addDummy = () => setDummiesCount((val) => val + 1);
    const removeDummy = () => setDummiesCount((val) => Math.max(val - 1, 0));

    const targetStyle: CSSProperties = {
        backgroundColor: generateRandomColor(),
    };

    const dummies = new Array<ReactElement>(dummiesCount);
    for (let i = 0; i < dummiesCount; i++) {
        dummies[i] = (
            <div key={i} className={classNames(classes.node, classes.dummy)}>
                Dummy
            </div>
        );
    }

    return (
        <ChapterWrapper title="useElementSize" subtitle="More custom hooks">
            <Toolbar>
                <Button text="Add dummy" onClick={addDummy} />
                <Button text="Remove dummy" onClick={removeDummy} />
            </Toolbar>

            <div className={classes.container}>
                <div ref={refCallback} className={classes.node} style={targetStyle}>
                    {width.toFixed(0)} x {height.toFixed(0)}
                </div>
                {dummies}
            </div>
        </ChapterWrapper>
    );
}
