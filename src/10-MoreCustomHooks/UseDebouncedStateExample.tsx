import { ChapterWrapper } from 'components';
import { useDebouncedState } from 'hooks/useDebouncedState';
import { useHistory } from 'hooks/useHistory';
import { MouseEventHandler } from 'react';
import { Position } from 'utils/geometry';
import { Car } from './common/Car';
import { CircleColor, mapToCircle } from './common/Circle';
import classes from './common/common.module.css';
import { mapToLine } from './common/Line';

const DELAY = 200;

export function UseDebouncedStateExample() {
  const [debouncedPosition, setDebouncedPosition] = useDebouncedState<Position | null>(null, DELAY);
  const debouncedHistory = useHistory(debouncedPosition);

  const handleMouseMove: MouseEventHandler<HTMLElement> = (event) => {
    const { clientX, clientY } = event;
    const target = event.target as HTMLElement;
    const { x, y } = target.getBoundingClientRect();
    setDebouncedPosition({
      x: clientX - x,
      y: clientY - y,
    });
  };

  return (
    <ChapterWrapper title="useDebouncedValue" subtitle="More custom hooks">
      <div className={classes.container} onMouseMove={handleMouseMove}>
        {mapToLine(debouncedHistory)}
        {mapToCircle(debouncedHistory, CircleColor.BLUE)}
        <Car path={debouncedHistory} />
      </div>
    </ChapterWrapper>
  );
}
