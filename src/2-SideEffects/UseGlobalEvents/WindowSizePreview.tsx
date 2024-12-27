import { useEffect, useState } from 'react';
import classes from './WindowSize.module.css';

type Size = {
    width: number;
    height: number;
};

function calculatePreviewSize(previewWidth: number): Size {
    const { innerWidth, innerHeight } = window;
    return {
        width: previewWidth,
        height: (previewWidth * innerHeight) / innerWidth,
    };
}

export function WindowSizePreview({ previewWidth }: { previewWidth: number }) {
    const [previewSize, setPreviewSize] = useState<Size>(() => calculatePreviewSize(previewWidth));

    useEffect(() => {
        setPreviewSize(calculatePreviewSize(previewWidth));
        const onResize = () => {
            setPreviewSize(calculatePreviewSize(previewWidth));
        };
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, [previewWidth]);

    if (!previewSize) {
        return null;
    }

    const { width, height } = previewSize;
    const { innerWidth, innerHeight } = window;

    return (
        <div className={classes.windowSize} style={{ width, height }}>
            <div className={classes.widthText} style={{ width }}>
                {innerWidth}px
            </div>
            <div className={classes.heightText} style={{ height }}>
                {innerHeight}px
            </div>
        </div>
    );
}
