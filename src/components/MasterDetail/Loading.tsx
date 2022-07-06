import { useAnimatedText } from 'hooks/useAnimatedText';

import classes from './Loading.module.css';

export function Loading() {
  const animatedText = useAnimatedText('.....', 200);

  return <div className={classes.loading}>{animatedText}</div>;
}
