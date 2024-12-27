import { Button, ChapterWrapper, Toolbar, ValueLabel } from 'components';
import { useRerender } from 'hooks/useRerender';
import { useState } from 'react';
import { generateRandomColor } from 'utils/generateRandomColor';
import { v4 as uuidv4 } from 'uuid';

const NODE_ID = 'value-label-container';

export function DirectDomChanges() {
    const rerender = useRerender();
    const [uid, setUid] = useState<string>(() => uuidv4());
    const [bgColor, setBgColor] = useState<string>(() => generateRandomColor());

    const changeUid = () => {
        setUid(uuidv4());
    };

    const changeBgColor = () => {
        setBgColor(generateRandomColor());
    };

    const directChangeBgColor = () => {
        // ! don't do that, don't change DOM directly
        const element = document.getElementById(NODE_ID);
        if (element) {
            element.style.backgroundColor = 'red';
        }
    };

    const messageStyle = `
    background-color: ${bgColor}; 
    border: 1px solid #0004;
    text-shadow: 1px 1px #0008;
    border-radius: 8px;
    color: white;
  `;

    console.log(`%c bgColor `, messageStyle);

    return (
        <ChapterWrapper
            title="Direct DOM changes"
            subtitle="Hooks basics, useState"
            rerender={rerender}
        >
            <Toolbar>
                <Button text="New UID" onClick={changeUid} />
                <Button text="New color" onClick={changeBgColor} />
                <Button text="New color (direct)" onClick={directChangeBgColor} />
            </Toolbar>
            <div id={NODE_ID} style={{ backgroundColor: bgColor, borderRadius: 8 }}>
                <ValueLabel value={uid} />
            </div>
        </ChapterWrapper>
    );
}
