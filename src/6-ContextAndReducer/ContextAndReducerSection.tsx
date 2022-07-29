import { Chapter, Section } from 'components';

import { ContactBook } from './ContactBook';
import { LazyInit2 } from './LazyInit2/LazyInit2';
import { UseContext } from './UseContext/UseContext';
import { UseCounterReducer } from './UseReducer/UseCounterReducer';
import { UseToggleReducer } from './UseToggle/UseToggleReducer';
import { VeganDragon } from './VeganDragon';

export function ContextAndReducerSection(): JSX.Element {
  return (
    <Section title="Context and reducer">
      <Section title="useReducer">
        <Chapter
          emoji="🧮"
          title="Counter reducer"
          path="counter-reducer"
          element={<UseCounterReducer />}
        />
        <Chapter emoji="🦥" title="Lazy init 2" path="lazy-init-2" element={<LazyInit2 />} />
        <Chapter
          emoji="✅"
          title="Toggle reducer"
          path="toggle-reducer"
          element={<UseToggleReducer />}
        />
      </Section>
      <Chapter emoji="🎨" title="useContext" path="use-context" element={<UseContext />} />
      <Chapter emoji="📒" title="Contact book" path="contact-book" element={<ContactBook />} />
      <Chapter emoji="🐲" title="Vegan Dragon" path="vegan-dragon" element={<VeganDragon />} />
    </Section>
  );
}
