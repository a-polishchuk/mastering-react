import { Chapter, Section } from 'components/MasterDetail';

import { HelloWorld } from './HelloWorld';
import { Arrays } from './JSX/Arrays';
import { Conditional } from './JSX/Conditional';
import { EventHandlers } from './JSX/EventHandlers';
import { Fragments } from './JSX/Fragments';
import { JsxBasics } from './JSX/JsxBasics';
import { ReactWithoutJsx } from './JSX/ReactWithoutJsx';
import { PropsAndChildren } from './PropsAndChildren';
import { ReactTraits } from './ReactTraits';
import { RenderingProcess } from './RenderingProcess';

export function IntroSection() {
  return (
    <Section title="Intro">
      <Chapter title="⚛️ React traits" component={ReactTraits} />
      <Chapter title="👽 Hello, world!" component={HelloWorld} />

      <Section title="JSX">
        <Chapter title="📝 JSX Basics" component={JsxBasics} />
        <Chapter title="📝 React.createElement()" component={ReactWithoutJsx} />
        <Chapter title="📎 Fragments" component={Fragments} />
        <Chapter title="🗄 Arrays" component={Arrays} />
        <Chapter title="📬 Event handlers" component={EventHandlers} />
        <Chapter title="❓ Conditional" component={Conditional} />
      </Section>

      <Chapter title="🧩 Components, props, children" component={PropsAndChildren} />
      <Chapter title="🎞 Rendering process" component={RenderingProcess} />
    </Section>
  );
}
