import { useLoggedLifecycle } from 'components/LoggedLifecycle';
import { memo } from 'react';

interface Props {
  tag: string;
  text: string;
}

export const MemoText = memo(({ tag, text }: Props): JSX.Element => {
  useLoggedLifecycle(tag);

  return <div>{text}</div>;
});
