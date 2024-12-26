import { Chapter, Section } from 'components/MasterDetail';
import { RouterPath } from 'config/RouterPath';
import { TrackMousePosition } from './TrackMousePosition';
import { UseClickOutsideExample } from './UseClickOutsideExample';
import { UseDebouncedStateExample } from './UseDebouncedStateExample';
import { UseElementSizeExample } from './UseElementSizeExample';
import { UseHistoryExample } from './UseHistoryExample';
import { UseHoveredExample } from './UseHoveredExample';
import { UsePreviousExample } from './UsePreviousExample';
import { UseThrottledStateExample } from './UseThrottledStateExample';
import { UseTimeoutExample } from './useTimeout/UseTimeoutExample';
import { UseWhatCausedRenderExample } from './UseWhatCausedRenderExample';

export function MoreCustomHooksSection() {
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
        title="usePreviousRenderValue"
        path={RouterPath.USE_PREVIOUS_RENDER_VALUE}
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
          title="useThrottledState"
          path={RouterPath.USE_THROTTLED_STATE}
          element={<UseThrottledStateExample />}
        />
        <Chapter
          emoji="🔵"
          title="useDebouncedState"
          path={RouterPath.USE_DEBOUNCED_STATE}
          element={<UseDebouncedStateExample />}
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
