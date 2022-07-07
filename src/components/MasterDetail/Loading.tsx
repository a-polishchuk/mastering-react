import { useAnimatedText } from 'hooks/useAnimatedText';

import classes from './Loading.module.css';

export function Loading(): JSX.Element {
  const animatedText = useAnimatedText('.....', 200);

  return <div className={classes.loading}>{animatedText}</div>;
}
