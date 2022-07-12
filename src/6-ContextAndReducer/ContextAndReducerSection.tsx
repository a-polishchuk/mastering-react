import { Section, Chapter } from 'components/MasterDetail';

import { UseContext } from './UseContext/UseContext';
import { UseCounterReducer } from './UseReducer/UseCounterReducer';
import { UseToggleReducer } from './UseToggle/UseToggleReducer';
import { ContactBook } from './ContactBook';

// TODO: add VeganDragon game here
export function ContextAndReducerSection(): JSX.Element {
  return (
    <Section title="Context and reducer">
      <Chapter title="useContext" component={UseContext} />
      <Section title="useReducer">
        <Chapter title="Counter reducer" component={UseCounterReducer} />
        <Chapter title="Toggle reducer" component={UseToggleReducer} />
      </Section>
      <Chapter title="Contact book" component={ContactBook} />
    </Section>
  );
}
