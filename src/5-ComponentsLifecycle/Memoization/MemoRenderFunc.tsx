import { memo, ReactElement } from 'react';
import { useLoggedLifecycle } from 'hooks/useLoggedLifecycle';

interface Props {
  tag: string;
  renderContent: () => ReactElement;
}

export const MemoRenderFunc = memo(({ tag, renderContent }: Props) => {
  useLoggedLifecycle(tag);

  return renderContent();
});
