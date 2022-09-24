import { ChapterWrapper } from 'components';
import { MouseEventHandler, useLayoutEffect, useState } from 'react';

import { ClickDots, CONTAINER_ID } from './ClicksDots';
import { Dot, DOT_ZERO } from './Dot';

export function UseLayoutEffectExample() {
  const [clickDot, setClickDot] = useState<Dot>(DOT_ZERO);
  const [eventDot, setEventDot] = useState<Dot>(DOT_ZERO);
  const [effectDot, setEffectDot] = useState<Dot>(DOT_ZERO);

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    const { pageX, pageY, target } = event;
    const container = target as HTMLDivElement;
    const { left: containerLeft, top: containerTop } = container.getBoundingClientRect();
    setClickDot({
      x: pageX - containerLeft,
      y: pageY - containerTop,
    });
    setEventDot({
      x: pageX,
      y: pageY,
    });
  };

  useLayoutEffect(() => {
    const container = document.getElementById(CONTAINER_ID);
    if (!container) {
      console.log(`Cannot find div with id ${CONTAINER_ID}`);
      return;
    }
    const { left: containerLeft, top: containerTop } = container.getBoundingClientRect();
    setEffectDot({
      x: eventDot.x - containerLeft,
      y: eventDot.y - containerTop,
    });
  }, [eventDot]);

  return (
    <ChapterWrapper
      title="Batching effects with useLayoutEffect"
      subtitle="useEffect vs useLayoutEffect"
    >
      <ClickDots blueDot={clickDot} pinkDot={effectDot} onClick={handleClick} />
    </ChapterWrapper>
  );
}
