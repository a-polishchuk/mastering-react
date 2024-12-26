import { createContext, ReactNode, useContext, useReducer } from 'react';
import { contactsReducer } from './contactsReducer';
import { initialState } from './initialState';
import { Action, ContactsContextType } from './types';

const defaultValue: ContactsContextType = [
  {
    contacts: [],
    selectedId: null,
  },
  (action: Action) => { },
];

const ContactsContext = createContext<ContactsContextType>(defaultValue);

export function useContacts() {
  return useContext(ContactsContext);
}

export function ContactsProvider({ children }: { children: ReactNode }) {
  const value = useReducer(contactsReducer, initialState);

  return <ContactsContext.Provider value={value}>{children}</ContactsContext.Provider>;
}
