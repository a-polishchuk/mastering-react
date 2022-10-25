import { ReactLogo } from 'assets/ReactLogo';
import { useElementSize } from 'hooks/useElementSize';
import { useMemo } from 'react';
import { generateRandomColor } from 'utils/generateRandomColor';

import classes from './Background.module.css';

export function Background(): JSX.Element {
  const color = useMemo(() => generateRandomColor() + '33', []);
  const [size, refCallback] = useElementSize();
  const [width] = size;

  return (
    <div ref={refCallback} className={classes.container}>
      <div className={classes.logoContainer}>
        <ReactLogo size={width} color={color} className={classes.logo} />
      </div>
    </div>
  );
}
