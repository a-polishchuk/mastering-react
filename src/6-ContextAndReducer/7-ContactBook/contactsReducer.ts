import { v4 as uuidv4 } from 'uuid';
import { initialState } from './initialState';
import { Action, ActionType, Contact, ContactsState } from './types';

export function contactsReducer(state: ContactsState, action: Action): ContactsState {
    switch (action.type) {
        case ActionType.ADD:
            return add(state);
        case ActionType.SELECT:
            return select(state, action.contactId);
        case ActionType.EDIT:
            return edit(state, action.contact);
        case ActionType.REMOVE:
            return remove(state, action.idToRemove);
        case ActionType.ROLLBACK:
            return initialState;
        default:
            throw new Error(`Unknown action: ${JSON.stringify(action)}`);
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

function edit(state: ContactsState, payload: Contact): ContactsState {
    const contacts = [...state.contacts];
    const index = contacts.findIndex((c) => c.id === payload.id);
    contacts[index] = payload;
    return {
        ...state,
        contacts,
    };
}

function remove(state: ContactsState, idToRemove: string): ContactsState {
    return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== idToRemove),
        selectedId: idToRemove === state.selectedId ? null : state.selectedId,
    };
}

function select(state: ContactsState, contactId: string): ContactsState {
    return {
        ...state,
        selectedId: contactId,
    };
}
