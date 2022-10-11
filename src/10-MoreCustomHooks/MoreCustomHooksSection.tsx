import { Chapter, Section } from 'components/MasterDetail';
import { RouterPath } from 'config/RouterPath';

import { UseDebouncedValueExample } from './useDebouncedValue/UseDebouncedValueExample';
import { UseHoveredExample } from './useHovered/UseHoveredExample';
import { UseThrottledValueExample } from './useThrottledValue/UseThrottledValueExample';
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
      <Chapter
        emoji="⏳"
        title="useThrottledValue"
        path={RouterPath.USE_THROTTLED_VALUE}
        element={<UseThrottledValueExample />}
      />
      <Chapter
        emoji="⌛️"
        title="useDebouncedValue"
        path={RouterPath.USE_DEBOUNCED_VALUE}
        element={<UseDebouncedValueExample />}
      />
    </Section>
  );
}
