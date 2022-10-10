import { Chapter, Section } from 'components/MasterDetail';
import { RouterPath } from 'config/RouterPath';
import { UseHoveredExample } from './useHovered/UseHoveredExample';

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
      <Chapter
        emoji="🖱️"
        title="useHovered"
        path={RouterPath.USE_HOVERED}
        element={<UseHoveredExample />}
      />
    </Section>
  );
}
