import { ChapterWrapper } from 'components';
import { useHistory } from 'hooks/useHistory';
import { useThrottledValue } from 'hooks/useThrottledValue';

import { CircleColor, mapToCircle } from './common/Circle';
import classes from './common/common.module.css';
import { mapToLine } from './common/Line';
import { useMousePosition } from './common/useMousePosition';

const DELAY = 200;
const HALF_TRANSPARENT = 0.5;

// TODO: check if it works properly, sometime last point is skipped for some reason
export function UseThrottledValueExample(): JSX.Element {
  const [mousePosition, moveHandler] = useMousePosition();
  const throttledPosition = useThrottledValue(mousePosition, DELAY);

  const positionHistory = useHistory(mousePosition);
  const throttledHistory = useHistory(throttledPosition);

  return (
    <ChapterWrapper title="useThrottledValue" subtitle="More custom hooks">
      <div className={classes.container} onMouseMove={moveHandler}>
        {mapToCircle(positionHistory, CircleColor.YELLOW, HALF_TRANSPARENT)}
        {mapToLine(throttledHistory, '#9900ff')}
        {mapToCircle(throttledHistory, CircleColor.VIOLET)}
      </div>
    </ChapterWrapper>
  );
}
