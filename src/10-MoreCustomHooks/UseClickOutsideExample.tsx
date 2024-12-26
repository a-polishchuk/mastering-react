import { ChapterWrapper } from 'components';
import { useClickOutside } from 'hooks/useClickOutside';
import { CSSProperties, useState } from 'react';
import { generateRandomColor } from 'utils/generateRandomColor';

import classes from './UseClickOutside.module.css';

const INITIAL_SIZE = 200;
const MIN_SIZE = 100;
const STEP = 25;

export function UseClickOutsideExample() {
  const [size, setSize] = useState<number>(INITIAL_SIZE);

  const refCallback = useClickOutside(() => {
    setSize((value) => Math.max(value - STEP, MIN_SIZE));
  });

  const onClickInside = () => {
    setSize((value) => value + STEP);
  };

  const targetStyle: CSSProperties = {
    backgroundColor: generateRandomColor(),
    width: size,
    height: size,
  };

  return (
    <ChapterWrapper title="useClickOutside" subtitle="More custom hooks">
      <div className={classes.container}>
        <div
          ref={refCallback}
          className={classes.target}
          style={targetStyle}
          onClick={onClickInside}
        >
          Try to click inside and outside
        </div>
      </div>
    </ChapterWrapper>
  );
}
