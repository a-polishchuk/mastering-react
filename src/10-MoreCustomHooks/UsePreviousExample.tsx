import { ChapterWrapper } from 'components';
import { usePreviousRenderValue } from 'hooks/usePreviousRenderValue';
import { useRerender } from 'hooks/useRerender';
import { Circle, CircleColor } from './common/Circle';
import classes from './common/common.module.css';
import { Line } from './common/Line';
import { useMousePosition } from './common/useMousePosition';

const HALF_TRANSPARENT = 0.5;

export function UsePreviousExample() {
  const [clickPosition, clickHandler] = useMousePosition();
  const prevPosition = usePreviousRenderValue(clickPosition);
  const rerender = useRerender();

  return (
    <ChapterWrapper title="usePreviousRenderValue" subtitle="More custom hooks" rerender={rerender}>
      <div className={classes.container} onClick={clickHandler}>
        {prevPosition && clickPosition && <Line from={prevPosition} to={clickPosition} />}
        {prevPosition && (
          <Circle position={prevPosition} color={CircleColor.RED} opacity={HALF_TRANSPARENT} />
        )}
        {clickPosition && (
          <Circle position={clickPosition} color={CircleColor.GREEN} opacity={HALF_TRANSPARENT} />
        )}
      </div>
    </ChapterWrapper>
  );
}
