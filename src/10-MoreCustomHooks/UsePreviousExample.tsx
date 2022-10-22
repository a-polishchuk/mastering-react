import { ChapterWrapper } from 'components';
import { usePrevious } from 'hooks/usePrevious';

import { Circle, CircleColor } from './common/Circle';
import classes from './common/common.module.css';
import { Line } from './common/Line';
import { useMousePosition } from './common/useMousePosition';

// TODO: rename, add rerender button
export function UsePreviousExample(): JSX.Element {
  const [clickPosition, clickHandler] = useMousePosition();
  const previousPosition = usePrevious(clickPosition);

  return (
    <ChapterWrapper title="usePrevious" subtitle="More custom hooks">
      <div className={classes.container} onClick={clickHandler}>
        {previousPosition && clickPosition && <Line from={previousPosition} to={clickPosition} />}
        {previousPosition && (
          <Circle position={previousPosition} color={CircleColor.RED} opacity={0.5} />
        )}
        {clickPosition && <Circle position={clickPosition} color={CircleColor.GREEN} />}
      </div>
    </ChapterWrapper>
  );
}
