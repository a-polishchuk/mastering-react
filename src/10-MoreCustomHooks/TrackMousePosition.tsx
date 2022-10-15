import { ChapterWrapper } from 'components';
import { useHistory } from 'hooks/useHistory';

import { CircleColor, mapToCircle } from './common/Circle';
import classes from './common/common.module.css';
import { useMousePosition } from './common/useMousePosition';

export function TrackMousePosition(): JSX.Element {
  const [mousePosition, moveHandler] = useMousePosition();
  const positions = useHistory(mousePosition);

  return (
    <ChapterWrapper title="Track mouse position" subtitle="More custom hooks">
      <div className={classes.container} onMouseMove={moveHandler}>
        {mapToCircle(positions, CircleColor.ORANGE)}
      </div>
    </ChapterWrapper>
  );
}
