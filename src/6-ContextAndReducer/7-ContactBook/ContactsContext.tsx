import { createContext, ReactNode, useContext, useReducer } from 'react';
import { contactsReducer } from './contactsReducer';
import { initialState } from './initialState';
import { ContactsContextType } from './types';

const ContactsContext = createContext<ContactsContextType | null>(null);

export function useContacts() {
    const context = useContext(ContactsContext);
    if (!context) {
        throw new Error('useContacts must be used within a ContactsProvider');
    }
    return context;
}

export function ContactsProvider({ children }: { children: ReactNode }) {
    const value = useReducer(contactsReducer, initialState);

    return <ContactsContext.Provider value={value}>{children}</ContactsContext.Provider>;
}
