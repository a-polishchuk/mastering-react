import { CSSProperties } from 'react';
import classNames from 'classnames';
import classes from './Wheel.module.css';

interface Props {
  isMoving: boolean;
  style?: CSSProperties;
}

export function Wheel({ isMoving, style }: Props): JSX.Element {
  return (
    <div className={classNames(classes.wheel, isMoving && classes.rotating)} style={style}>
      <div className={classes.tyre} />
    </div>
  );
}
