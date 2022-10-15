import { Chapter, Section } from 'components/MasterDetail';
import { RouterPath } from 'config/RouterPath';

import { TrackMousePosition } from './TrackMousePosition';
import { UseClickOutsideExample } from './UseClickOutsideExample';
import { UseDebouncedValueExample } from './UseDebouncedValueExample';
import { UseElementSizeExample } from './UseElementSizeExample';
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
      <Section title="Throttle, debounce">
        <Chapter
          emoji="🟠"
          title="Track mouse position"
          path={RouterPath.TRACK_MOUSE_POSITION}
          element={<TrackMousePosition />}
        />
        <Chapter
          emoji="🟣"
          title="useThrottle"
          path={RouterPath.USE_THROTTLE}
          element={<UseThrottledValueExample />}
        />
        <Chapter
          emoji="🔵"
          title="useDebounce"
          path={RouterPath.USE_DEBOUNCE}
          element={<UseDebouncedValueExample />}
        />
      </Section>
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
        element={<UseElementSizeExample />}
      />
    </Section>
  );
}
