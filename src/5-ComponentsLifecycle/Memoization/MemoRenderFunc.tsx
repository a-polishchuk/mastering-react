import { useLoggedLifecycle } from 'components/LoggedLifecycle';
import { memo } from 'react';

interface Props {
  tag: string;
  renderContent: () => JSX.Element;
}

export const MemoRenderFunc = memo(({ tag, renderContent }: Props): JSX.Element => {
  useLoggedLifecycle(tag);

  return renderContent();
});
