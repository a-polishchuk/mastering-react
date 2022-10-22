import { ChapterWrapper } from 'components';
import { useHistory } from 'hooks/useHistory';
import { useThrottledState } from 'hooks/useThrottledState';
import { MouseEventHandler } from 'react';
import { Position } from 'utils/geometry';

import { Car } from './common/Car';
import { CircleColor, mapToCircle } from './common/Circle';
import classes from './common/common.module.css';
import { mapToLine } from './common/Line';

const DELAY = 300;

export function UseThrottledStateExample(): JSX.Element {
  const [throttledPosition, setThrottledPosition] = useThrottledState<Position | null>(null, DELAY);
  const throttledHistory = useHistory(throttledPosition);

  const handleMouseMove: MouseEventHandler<HTMLElement> = (event) => {
    const { clientX, clientY } = event;
    const target = event.target as HTMLElement;
    const { x, y } = target.getBoundingClientRect();
    setThrottledPosition({
      x: clientX - x,
      y: clientY - y,
    });
  };

  return (
    <ChapterWrapper title="useThrottledState" subtitle="More custom hooks">
      <div className={classes.container} onMouseMove={handleMouseMove}>
        {mapToLine(throttledHistory)}
        {mapToCircle(throttledHistory, CircleColor.VIOLET)}
        <Car path={throttledHistory} />
      </div>
    </ChapterWrapper>
  );
}
