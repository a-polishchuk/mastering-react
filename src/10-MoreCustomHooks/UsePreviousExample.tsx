import { ChapterWrapper } from 'components';
import { usePrevious } from 'hooks/usePrevious';
import { MouseEventHandler, useState } from 'react';

import { Circle, CircleColor } from './common/Circle';
import classes from './common/common.module.css';
import { Position } from './common/Position';

export function UsePreviousExample(): JSX.Element {
  const [clickPosition, setClickPosition] = useState<Position | null>(null);
  const previousPosition = usePrevious(clickPosition);

  const onClick: MouseEventHandler<HTMLDivElement> = (event) => {
    const { clientX, clientY } = event;
    const target = event.target as HTMLDivElement;
    const { x, y } = target.getBoundingClientRect();
    setClickPosition({
      x: clientX - x,
      y: clientY - y,
    });
  };

  return (
    <ChapterWrapper title="usePrevious" subtitle="More custom hooks">
      <div className={classes.container} onClick={onClick}>
        {previousPosition && <Circle position={previousPosition} color={CircleColor.RED} />}
        {clickPosition && <Circle position={clickPosition} color={CircleColor.GREEN} />}
      </div>
    </ChapterWrapper>
  );
}
