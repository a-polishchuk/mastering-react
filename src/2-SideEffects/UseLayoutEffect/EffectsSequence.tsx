import { ChapterHeader } from 'components/ChapterHeader';
import { useEffect, useState, useRef, MouseEventHandler } from 'react';

import { buildDotStyle } from './buildDotStyle';
import { generateDummies } from './generateDummies';
import { Position } from './Position';

const INITIAL_POSITION: Position = { x: 0, y: 0 };
const DUMMIES_COUNT = 5000;
const DUMMY_SIZE = 10;

export function EffectsSequence() {
  const divRef = useRef<HTMLDivElement | null>(null);

  const [eventPos, setEventPos] = useState<Position>(INITIAL_POSITION);
  const [divPos, setDivPos] = useState<Position>(INITIAL_POSITION);
  const [clickPos, setClickPos] = useState<Position>(INITIAL_POSITION);
  const [effectPos, setEffectPos] = useState<Position>(INITIAL_POSITION);

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    const { pageX, pageY, target } = event;

    setEventPos({
      x: pageX,
      y: pageY,
    });

    const { left, top } = (target as HTMLDivElement).getBoundingClientRect();
    setClickPos({
      x: pageX - left,
      y: pageY - top,
    });
  };

  useEffect(() => {
    if (divRef.current) {
      const { left, top } = divRef.current.getBoundingClientRect();
      setDivPos({
        x: left,
        y: top,
      });
    }
  }, [eventPos]);

  useEffect(() => {
    setEffectPos({
      x: eventPos.x - divPos.x,
      y: eventPos.y - divPos.y,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [divPos]);

  return (
    <div
      ref={divRef}
      onClick={handleClick}
      style={{ height: '100%', width: '100%', position: 'relative' }}
    >
      <ChapterHeader title="useEffect vs useLayoutEffect" subtitle="Effects sequence" />
      {generateDummies(DUMMIES_COUNT, DUMMY_SIZE)}
      <div style={buildDotStyle(clickPos, '#5599ff88', 10)} />
      <div style={buildDotStyle(effectPos, '#ff559988', 20)} />
    </div>
  );
}
