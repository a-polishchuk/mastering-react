import { useInterval } from 'hooks/useInterval';
import { useToggle } from 'hooks/useToggle';

export function useDotsVisible() {
  const [dotsVisible, toggle] = useToggle(false);

  useInterval(toggle, 3000);

  return dotsVisible;
}
