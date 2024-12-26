import { ReactNode } from 'react';
import { useLoggedLifecycle } from 'hooks/useLoggedLifecycle';

type Props = {
  tag: string;
  children: ReactNode;
};

export function LoggedLifecycle({ tag, children }: Props) {
  useLoggedLifecycle(tag);

  return <>{children}</>;
}
