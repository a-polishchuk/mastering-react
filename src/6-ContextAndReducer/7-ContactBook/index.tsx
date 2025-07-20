import { ChapterWrapper } from 'components';
import { ContactsProvider } from './ContactsContext';
import { ContactsList } from './ContactsList';
import { ContactsToolbar } from './ContactsToolbar';

export function ContactBookChapter() {
    return (
        <ChapterWrapper title="Contact book" subtitle="useContext + useReducer">
            <ContactsProvider>
                <ContactsToolbar />
                <ContactsList />
            </ContactsProvider>
        </ChapterWrapper>
    );
}
