import { ChapterWrapper } from 'components';
import { useHistory } from 'hooks/useHistory';

import { Circle, CircleColor, mapToCircle } from './common/Circle';
import classes from './common/common.module.css';
import { mapToLine } from './common/Line';
import { Position } from './common/Position';
import { useMousePosition } from './common/useMousePosition';

export function UseHistoryExample(): JSX.Element {
  const [clickPosition, clickHandler] = useMousePosition();
  const history = useHistory(clickPosition);

  const linePath = history.filter((item) => item !== null) as Position[];
  if (clickPosition) {
    linePath.push(clickPosition);
  }

  return (
    <ChapterWrapper title="useHistory" subtitle="More custom hooks">
      <div className={classes.container} onClick={clickHandler}>
        {mapToLine(linePath)}
        {mapToCircle(history, CircleColor.RED)}
        {clickPosition && <Circle position={clickPosition} color={CircleColor.GREEN} />}
      </div>
    </ChapterWrapper>
  );
}
