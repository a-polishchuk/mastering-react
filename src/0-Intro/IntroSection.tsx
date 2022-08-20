import { Chapter, Section } from 'components';

import { HelloWorld } from './HelloWorld';
import { Arrays } from './JSX/Arrays';
import { Conditional } from './JSX/Conditional';
import { EventHandlers } from './JSX/EventHandlers';
import { Fragments } from './JSX/Fragments';
import { JsxBasics } from './JSX/JsxBasics';
import { ReactWithoutJsx } from './JSX/ReactWithoutJsx';
import { PropsAndChildren } from './PropsAndChildren/PropsAndChildren';
import { ReactTraits } from './ReactTraits/ReactTraits';
import { RenderingProcess } from './RenderingProcess/RenderingProcess';

export function IntroSection() {
  return (
    <Section title="Intro">
      <Chapter emoji="⚛️" title="React traits" path="react-traits" element={<ReactTraits />} />
      <Chapter emoji="👽" title="Hello, world!" path="hello-world" element={<HelloWorld />} />

      <Section title="JSX">
        <Chapter emoji="📝" title="JSX Basics" path="jsx-basics" element={<JsxBasics />} />
        <Chapter
          emoji="🏗"
          title="React.createElement()"
          path="create-element"
          element={<ReactWithoutJsx />}
        />
        <Chapter emoji="📎" title="Fragments" path="fragments" element={<Fragments />} />
        <Chapter emoji="🗄" title="Arrays" path="arrays" element={<Arrays />} />
        <Chapter
          emoji="📬"
          title="Event handlers"
          path="event-handlers"
          element={<EventHandlers />}
        />
        <Chapter emoji="❓" title="Conditional" path="conditional" element={<Conditional />} />
      </Section>

      <Chapter
        emoji="🧩"
        title="Components, props, children"
        path="props-and-children"
        element={<PropsAndChildren />}
      />
      <Chapter
        emoji="🎞"
        title="Rendering process"
        path="rendering-process"
        element={<RenderingProcess />}
      />
    </Section>
  );
}
