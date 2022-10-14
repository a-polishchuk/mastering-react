import { ChapterWrapper } from 'components';
import { useElementSize } from 'hooks/useElementSize';
import { CSSProperties } from 'react';
import { generateRandomColor } from 'utils/generateRandomColor';

import classes from './UseElementSize.module.css';

export function UseElementSizeExample(): JSX.Element {
  const [size, refCallback] = useElementSize();
  const [width, height] = size;

  const targetStyle: CSSProperties = {
    backgroundColor: generateRandomColor(),
  };

  return (
    <ChapterWrapper title="useElementSize" subtitle="More custom hooks">
      <div className={classes.container}>
        <div ref={refCallback} className={classes.target} style={targetStyle}>
          {width.toFixed(0)} x {height.toFixed(0)}
        </div>
      </div>
    </ChapterWrapper>
  );
}
