import { ChapterWrapper } from 'components';
import { useHistory } from 'hooks/useHistory';
import { useThrottledValue } from 'hooks/useThrottledValue';
import { MouseEventHandler, useCallback, useState } from 'react';
import { Position } from 'utils/geometry';
import { throttle } from 'lodash';

import { CircleColor, mapToCircle } from './common/Circle';
import classes from './common/common.module.css';
import { mapToLine } from './common/Line';

const DELAY = 200;

export function UseThrottledValueExample(): JSX.Element {
  const [mousePosition, setMousePosition] = useState<Position | null>(null);
  const throttledPosition = useThrottledValue(mousePosition, DELAY);
  const throttledHistory = useHistory(throttledPosition);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleMouseMove: MouseEventHandler<HTMLElement> = useCallback(
    throttle((event) => {
      const { clientX, clientY } = event;
      const target = event.target as HTMLElement;
      const { x, y } = target.getBoundingClientRect();
      setMousePosition({
        x: clientX - x,
        y: clientY - y,
      });
    }, DELAY),
    []
  );

  return (
    <ChapterWrapper title="useThrottledValue" subtitle="More custom hooks">
      <div className={classes.container} onMouseMove={handleMouseMove}>
        {mapToLine(throttledHistory, '#9900ff')}
        {mapToCircle(throttledHistory, CircleColor.VIOLET)}
      </div>
    </ChapterWrapper>
  );
}
