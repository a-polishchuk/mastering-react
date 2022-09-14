import { Chapter, Section } from 'components';
import { RouterPath } from 'config/RouterPath';

import { HelloWorld } from './HelloWorld';
import { Arrays } from './JSX/Arrays';
import { Conditional } from './JSX/Conditional';
import { EventHandlers } from './JSX/EventHandlers';
import { Fragments } from './JSX/Fragments';
import { IgnoredValues } from './JSX/IgnoredValues';
import { JsxBasics } from './JSX/JsxBasics';
import { ReactWithoutJsx } from './JSX/ReactWithoutJsx';
import { PropsAndChildren } from './PropsAndChildren/PropsAndChildren';
import { ReactTraits } from './ReactTraits/ReactTraits';
import { RenderingProcess } from './RenderingProcess/RenderingProcess';

export function IntroSection() {
  return (
    <Section title="Intro">
      <Chapter
        emoji="⚛️"
        title="React traits"
        path={RouterPath.REACT_TRAITS}
        element={<ReactTraits />}
      />
      <Chapter
        emoji="👽"
        title="Hello, world!"
        path={RouterPath.HELLO_WORLD}
        element={<HelloWorld />}
      />

      <Section title="JSX">
        <Chapter
          emoji="📝"
          title="JSX Basics"
          path={RouterPath.JSX_BASICS}
          element={<JsxBasics />}
        />
        <Chapter
          emoji="🏗"
          title="React.createElement()"
          path={RouterPath.JSX_CREATE_ELEMENT}
          element={<ReactWithoutJsx />}
        />
        <Chapter
          emoji="📎"
          title="Fragments"
          path={RouterPath.JSX_FRAGMENTS}
          element={<Fragments />}
        />
        <Chapter emoji="🗄" title="Arrays" path={RouterPath.JSX_ARRAYS} element={<Arrays />} />
        <Chapter
          emoji="🚯"
          title="Ignored values"
          path={RouterPath.JSX_IGNORED_VALUES}
          element={<IgnoredValues />}
        />
        <Chapter
          emoji="📬"
          title="Event handlers"
          path={RouterPath.JSX_EVENT_HANDLERS}
          element={<EventHandlers />}
        />
        <Chapter
          emoji="❓"
          title="Conditional"
          path={RouterPath.JSX_CONDITIONAL}
          element={<Conditional />}
        />
      </Section>

      <Chapter
        emoji="🧩"
        title="Components, props, children"
        path={RouterPath.PROPS_AND_CHILDREN}
        element={<PropsAndChildren />}
      />
      <Chapter
        emoji="🎞"
        title="Rendering process"
        path={RouterPath.RENDERING_PROCESS}
        element={<RenderingProcess />}
      />
    </Section>
  );
}
