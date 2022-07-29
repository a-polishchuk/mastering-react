import { useLoggedLifecycle } from 'hooks/useLoggedLifecycle';
import { Children, ReactNode } from 'react';
import { getRandomArrayElement } from 'utils/getRandomArrayElement';

export function RandomContainer({ children }: { children: ReactNode }): JSX.Element {
  useLoggedLifecycle('Container');

  const array = Children.toArray(children);
  const randomChild = getRandomArrayElement(array);

  return <>{randomChild}</>;
}
