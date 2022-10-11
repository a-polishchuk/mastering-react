import { CircleColor, mapToCircle } from '10-MoreCustomHooks/Circle';
import { Position } from '10-MoreCustomHooks/Position';
import { useHistory } from '10-MoreCustomHooks/useHistory';
import { ChapterWrapper } from 'components';
import { MouseEventHandler, useState } from 'react';

import { useThrottledValue } from './useThrottledValue';
import classes from './UseThrottledValue.module.css';

const DELAY = 200;

export function UseThrottledValueExample(): JSX.Element {
  const [mousePosition, setMousePosition] = useState<Position | null>(null);
  const throttledPosition = useThrottledValue(mousePosition, DELAY);

  const positionHistory = useHistory(mousePosition);
  const throttledHistory = useHistory(throttledPosition);

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    const { clientX, clientY } = event;
    const target = event.target as HTMLDivElement;
    const { x, y } = target.getBoundingClientRect();
    setMousePosition({
      x: clientX - x,
      y: clientY - y,
    });
  };

  return (
    <ChapterWrapper title="useThrottledValue" subtitle="More custom hooks">
      <div className={classes.container} onMouseMove={onMouseMove}>
        {mapToCircle(positionHistory, CircleColor.YELLOW)}
        {mapToCircle(throttledHistory, CircleColor.VIOLET)}
      </div>
    </ChapterWrapper>
  );
}
