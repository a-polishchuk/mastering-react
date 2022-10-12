import { ChapterWrapper } from 'components';
import { useDebouncedValue } from 'hooks/useDebouncedValue';
import { useHistory } from 'hooks/useHistory';

import { CircleColor, mapToCircle } from './common/Circle';
import classes from './common/common.module.css';
import { mapToLine } from './common/Line';
import { useMousePosition } from './common/useMousePosition';

const DELAY = 200;
const HALF_TRANSPARENT = 0.5;

export function UseDebouncedValueExample(): JSX.Element {
  const [mousePosition, moveHandler] = useMousePosition();
  const debouncedPosition = useDebouncedValue(mousePosition, DELAY);

  const positionHistory = useHistory(mousePosition);
  const debouncedHistory = useHistory(debouncedPosition);

  return (
    <ChapterWrapper title="useDebouncedValue" subtitle="More custom hooks">
      <div className={classes.container} onMouseMove={moveHandler}>
        {mapToCircle(positionHistory, CircleColor.BLUE, HALF_TRANSPARENT)}
        {mapToLine(debouncedHistory, '#ffbb00')}
        {mapToCircle(debouncedHistory, CircleColor.ORANGE)}
      </div>
    </ChapterWrapper>
  );
}
