import { memo } from 'react';
import { useLoggedLifecycle } from 'hooks/useLoggedLifecycle';

type Props = {
  tag: string;
  text: string;
};

export const MemoText = memo(({ tag, text }: Props) => {
  useLoggedLifecycle(tag);

  return <div>{text}</div>;
});
