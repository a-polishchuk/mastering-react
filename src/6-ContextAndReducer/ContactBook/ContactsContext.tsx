import { createContext, ReactNode, useContext, useReducer } from 'react';

import { contactsReducer } from './contactsReducer';
import { initialState } from './initialState';
import { Action, ContactsContextType, ContactsReducer } from './types';

const defaultValue: ContactsContextType = [
  {
    contacts: [],
    selectedId: null,
  },
  (action: Action) => {},
];

const ContactsContext = createContext<ContactsContextType>(defaultValue);

export function useContacts() {
  return useContext(ContactsContext);
}

export function ContactsProvider({ children }: { children: ReactNode }): JSX.Element {
  const value = useReducer<ContactsReducer>(contactsReducer, initialState);

  return <ContactsContext.Provider value={value}>{children}</ContactsContext.Provider>;
}
