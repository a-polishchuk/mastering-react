import { Chapter, Section } from 'components/MasterDetail';
import { RouterPath } from 'config/RouterPath';

import { UseClickOutsideExample } from './UseClickOutsideExample';
import { UseDebouncedValueExample } from './UseDebouncedValueExample';
import { UseHistoryExample } from './UseHistoryExample';
import { UseHoveredExample } from './UseHoveredExample';
import { UsePreviousExample } from './UsePreviousExample';
import { UseThrottledValueExample } from './UseThrottledValueExample';
import { UseTimeoutExample } from './useTimeout/UseTimeoutExample';
import { UseWhatCausedRenderExample } from './UseWhatCausedRenderExample';

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
        emoji="🦄"
        title="useHovered"
        path={RouterPath.USE_HOVERED}
        element={<UseHoveredExample />}
      />
      <Chapter
        emoji="🔴"
        title="usePrevious"
        path={RouterPath.USE_PREVIOUS}
        element={<UsePreviousExample />}
      />
      <Chapter
        emoji="🟢"
        title="useHistory"
        path={RouterPath.USE_HISTORY}
        element={<UseHistoryExample />}
      />
      <Chapter
        emoji="🟣"
        title="useThrottledValue"
        path={RouterPath.USE_THROTTLED_VALUE}
        element={<UseThrottledValueExample />}
      />
      <Chapter
        emoji="🔵"
        title="useDebouncedValue"
        path={RouterPath.USE_DEBOUNCED_VALUE}
        element={<UseDebouncedValueExample />}
      />
      <Chapter
        emoji="⏲"
        title="useTimeout"
        path={RouterPath.USE_TIMEOUT}
        element={<UseTimeoutExample />}
      />
      <Chapter
        emoji="🎯"
        title="useClickOutside"
        path={RouterPath.USE_CLICK_OUTSIDE}
        element={<UseClickOutsideExample />}
      />
      <Chapter
        emoji="📐"
        title="useElementSize"
        path={RouterPath.USE_ELEMENT_SIZE}
        element={<UseClickOutsideExample />}
      />
    </Section>
  );
}
