import { ChapterWrapper } from 'components';
import { useHistory } from 'hooks/useHistory';

import { Circle, CircleColor, mapToCircle } from './common/Circle';
import classes from './common/common.module.css';
import { mapToLine } from './common/Line';
import { useMousePosition } from './common/useMousePosition';

export function UseHistoryExample(): JSX.Element {
  const [clickPosition, clickHandler] = useMousePosition();
  const history = useHistory(clickPosition);

  return (
    <ChapterWrapper title="useHistory" subtitle="More custom hooks">
      <div className={classes.container} onClick={clickHandler}>
        {mapToLine(history)}
        {mapToCircle(history, CircleColor.RED, 0.5)}
        {clickPosition && <Circle position={clickPosition} color={CircleColor.GREEN} />}
      </div>
    </ChapterWrapper>
  );
}
