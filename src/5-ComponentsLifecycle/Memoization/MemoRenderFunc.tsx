import { useLoggedLifecycle } from 'hooks/useLoggedLifecycle';
import { memo, ReactElement } from 'react';

type Props = {
  tag: string;
  renderContent: () => ReactElement;
};

export const MemoRenderFunc = memo(({ tag, renderContent }: Props) => {
  useLoggedLifecycle(tag);

  return renderContent();
});
