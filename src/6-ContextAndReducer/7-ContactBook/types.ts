import { Dispatch } from 'react';

export type Contact = {
    id: string;
    name: string;
    phone: string;
};

export type ContactsState = {
    contacts: Contact[];
    selectedId: string | null;
};

export enum ActionType {
    ADD = 'ADD',
    SELECT = 'SELECT',
    EDIT = 'EDIT',
    REMOVE = 'REMOVE',
    ROLLBACK = 'ROLLBACK',
}

export type Action =
    | {
          type: ActionType.ADD;
      }
    | {
          type: ActionType.SELECT;
          contactId: string;
      }
    | {
          type: ActionType.EDIT;
          contact: Contact;
      }
    | {
          type: ActionType.REMOVE;
          idToRemove: string;
      }
    | {
          type: ActionType.ROLLBACK;
      };

export type ContactsReducer = (state: ContactsState, action: Action) => ContactsState;

export type ContactsContextType = [ContactsState, Dispatch<Action>];
