import { ChapterWrapper } from 'components';
import { useHistory } from 'hooks/useHistory';
import { MouseEventHandler, useState } from 'react';

import { Circle, CircleColor, mapToCircle } from './common/Circle';
import classes from './common/common.module.css';
import { Position } from './common/Position';

export function UseHistoryExample(): JSX.Element {
  const [clickPosition, setClickPosition] = useState<Position | null>(null);
  const history = useHistory(clickPosition);

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
    <ChapterWrapper title="useHistory" subtitle="More custom hooks">
      <div className={classes.container} onClick={onClick}>
        {mapToCircle(history, CircleColor.RED)}
        {clickPosition && <Circle position={clickPosition} color={CircleColor.GREEN} />}
      </div>
    </ChapterWrapper>
  );
}
