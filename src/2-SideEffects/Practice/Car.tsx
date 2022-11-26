import classes from './Car.module.css';
import { Wheel } from './Wheel';

interface Props {
  color: string;
  isMoving: boolean;
}

export function Car({ color, isMoving }: Props): JSX.Element {
  return (
    <div className={classes.container}>
      <div className={classes.glass} />
      <div className={classes.spoiler} style={{ backgroundColor: color }} />
      <div className={classes.body} style={{ backgroundColor: color }} />
      <Wheel isMoving={isMoving} style={{ left: 10, bottom: 0 }} />
      <Wheel isMoving={isMoving} style={{ right: 0, bottom: 0 }} />
    </div>
  );
}
