import { Chapter, Section } from 'components/MasterDetail';

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
        <Chapter title="🧮 Counter reducer" component={UseCounterReducer} />
        <Chapter title="🦥 Lazy init 2" component={LazyInit2} />
        <Chapter title="✅ Toggle reducer" component={UseToggleReducer} />
      </Section>
      <Chapter title="🎨 useContext" component={UseContext} />
      <Chapter title="📒 Contact book" component={ContactBook} />
      <Chapter title="🐲 Vegan Dragon" component={VeganDragon} />
    </Section>
  );
}
