import { ReactLogo } from 'components/ReactLogo/ReactLogo';
import { useElementSize } from 'hooks/useElementSize';
import { useMemo, useRef } from 'react';
import { generateRandomColor } from 'utils/generateRandomColor';

import classes from './Background.module.css';

export function Background(): JSX.Element {
  const color = useMemo(() => generateRandomColor() + '33', []);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width] = useElementSize(containerRef);

  return (
    <div ref={containerRef} className={classes.container}>
      <div className={classes.logoContainer}>
        <ReactLogo size={width} color={color} className={classes.logo} />
      </div>
    </div>
  );
}
