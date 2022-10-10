import { Chapter, Section } from 'components/MasterDetail';
import { RouterPath } from 'config/RouterPath';

import { UseWhatCausedRenderExample } from './useWhatCausedRender/UseWhatCausedRenderExample';

export function MoreCustomHooksSection(): JSX.Element {
  return (
    <Section title="More custom hooks">
      <Chapter
        emoji="🔂"
        title="useWhatCausedRender"
        path={RouterPath.USE_WHAT_CAUSED_RENDER}
        element={<UseWhatCausedRenderExample />}
      />
    </Section>
  );
}
