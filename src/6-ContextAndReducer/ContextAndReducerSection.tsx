import { Chapter, Section } from 'components';
import { RouterPath } from 'config/RouterPath';
import { ContactBook } from './ContactBook';
import { IntroToContext } from './IntroToContext/IntroToContext';
import { LazyInit2 } from './LazyInit2/LazyInit2';
import { NestedContexts } from './NestedContexts/NestedContexts';
import { UseContext } from './UseContext/UseContext';
import { UseCounterReducer } from './UseReducer/UseCounterReducer';
import { UseRerenderReducer } from './UseRerender/UseRerenderReducer';
import { UseToggleReducer } from './UseToggle/UseToggleReducer';
import { VeganDragon } from './VeganDragon/VeganDragon';

export function ContextAndReducerSection() {
    return (
        <Section title="Context and reducer">
            <Section title="useReducer">
                <Chapter
                    emoji="🧮"
                    title="Counter reducer"
                    path={RouterPath.COUNTER_REDUCER}
                    element={<UseCounterReducer />}
                />
                <Chapter
                    emoji="🦥"
                    title="Lazy init 2"
                    path={RouterPath.REDUCER_LAZY_INIT}
                    element={<LazyInit2 />}
                />
                <Chapter
                    emoji="✅"
                    title="Toggle reducer"
                    path={RouterPath.TOGGLE_REDUCER}
                    element={<UseToggleReducer />}
                />
                <Chapter
                    emoji="🔄"
                    title="Rerender reducer"
                    path={RouterPath.RERENDER_REDUCER}
                    element={<UseRerenderReducer />}
                />
            </Section>
            <Section title="Context">
                <Chapter
                    emoji="🔝"
                    title="Intro to Context"
                    path={RouterPath.INTRO_TO_CONTEXT}
                    element={<IntroToContext />}
                />
                <Chapter
                    emoji="🗃️"
                    title="Nested Contexts"
                    path={RouterPath.NESTED_CONTEXTS}
                    element={<NestedContexts />}
                />
                <Chapter
                    emoji="🎨"
                    title="useContext"
                    path={RouterPath.USE_CONTEXT}
                    element={<UseContext />}
                />
            </Section>
            <Section title="useContext && useReducer">
                <Chapter
                    emoji="📒"
                    title="Contact book"
                    path={RouterPath.CONTACT_BOOK}
                    element={<ContactBook />}
                />
                <Chapter
                    emoji="🐲"
                    title="Vegan Dragon"
                    path={RouterPath.VEGAN_DRAGON}
                    element={<VeganDragon />}
                />
            </Section>
        </Section>
    );
}
