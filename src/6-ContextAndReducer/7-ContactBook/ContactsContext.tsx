import { createContextHook } from 'hooks/createContextHook';
import { createContext, ReactNode, useReducer } from 'react';
import { contactsReducer } from './contactsReducer';
import { initialState } from './initialState';
import { ContactsContextType } from './types';

const ContactsContext = createContext<ContactsContextType | undefined>(undefined);

export const useContacts = createContextHook(ContactsContext, ContactsProvider);

export function ContactsProvider({ children }: { children: ReactNode }) {
    const value = useReducer(contactsReducer, initialState);

    return <ContactsContext.Provider value={value}>{children}</ContactsContext.Provider>;
}
