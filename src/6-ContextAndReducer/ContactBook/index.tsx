import { ChapterHeader } from 'components/ChapterHeader';

import { ContactsProvider } from './ContactsContext';
import { ContactsList } from './ContactsList';
import { ContactsToolbar } from './ContactsToolbar';

export function ContactBook(): JSX.Element {
  return (
    <>
      <ChapterHeader title="Contact book" subtitle="useContext + useReducer" />

      <ContactsProvider>
        <ContactsList />
        <ContactsToolbar />
      </ContactsProvider>
    </>
  );
}
