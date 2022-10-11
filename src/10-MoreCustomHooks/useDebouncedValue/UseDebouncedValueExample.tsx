import { CircleColor, mapToCircle } from '10-MoreCustomHooks/Circle';
import { Position } from '10-MoreCustomHooks/Position';
import { useHistory } from '10-MoreCustomHooks/useHistory';
import { ChapterWrapper } from 'components';
import { MouseEventHandler, useState } from 'react';

import { useDebouncedValue } from './useDebouncedValue';
import classes from './UseDebouncedValue.module.css';

const DELAY = 200;

export function UseDebouncedValueExample(): JSX.Element {
  const [mousePosition, setMousePosition] = useState<Position | null>(null);
  const debouncedPosition = useDebouncedValue(mousePosition, DELAY);

  const positionHistory = useHistory(mousePosition);
  const debouncedHistory = useHistory(debouncedPosition);

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
    <ChapterWrapper title="useDebouncedValue" subtitle="More custom hooks">
      <div className={classes.container} onMouseMove={onMouseMove}>
        {mapToCircle(positionHistory, CircleColor.GREEN)}
        {mapToCircle(debouncedHistory, CircleColor.RED)}
      </div>
    </ChapterWrapper>
  );
}
