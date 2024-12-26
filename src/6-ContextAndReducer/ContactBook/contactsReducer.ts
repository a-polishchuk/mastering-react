import { v4 as uuidv4 } from 'uuid';
import { initialState } from './initialState';
import { Action, ActionType, Contact, ContactsState } from './types';

export function contactsReducer(state: ContactsState, action: Action): ContactsState {
  switch (action.type) {
    case ActionType.ADD:
      return add(state);
    case ActionType.SELECT:
      return select(state, action);
    case ActionType.EDIT:
      return edit(state, action);
    case ActionType.REMOVE:
      return remove(state, action);
    case ActionType.ROLLBACK:
      return initialState;
    default:
      throw new Error(`action type ${action.type} was not recognized`);
  }
}

function add(state: ContactsState): ContactsState {
  const newContact: Contact = {
    id: uuidv4(),
    name: 'name',
    phone: 'phone',
  };
  return {
    ...state,
    contacts: [...state.contacts, newContact],
  };
}

function edit(state: ContactsState, action: Action): ContactsState {
  const contacts = [...state.contacts];
  const index = contacts.findIndex((c) => c.id === action.payload.id);
  contacts[index] = action.payload;
  return {
    ...state,
    contacts,
  };
}

function remove(state: ContactsState, action: Action): ContactsState {
  const idToRemove = action.payload.id;
  return {
    ...state,
    contacts: state.contacts.filter((c) => c.id !== idToRemove),
    selectedId: idToRemove === state.selectedId ? null : state.selectedId,
  };
}

function select(state: ContactsState, action: Action): ContactsState {
  return {
    ...state,
    selectedId: action.payload.id,
  };
}
