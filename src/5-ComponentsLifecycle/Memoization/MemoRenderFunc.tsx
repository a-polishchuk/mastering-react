import { useLoggedLifecycle } from 'hooks/useLoggedLifecycle';
import { memo } from 'react';

interface Props {
  tag: string;
  renderContent: () => JSX.Element;
}

export const MemoRenderFunc = memo(({ tag, renderContent }: Props): JSX.Element => {
  useLoggedLifecycle(tag);

  return renderContent();
});
