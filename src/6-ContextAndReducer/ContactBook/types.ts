import { Dispatch } from 'react';

export interface Contact {
  id: string;
  name: string;
  phone: string;
}

export interface ContactsState {
  contacts: Contact[];
  selectedId: string | null;
}

export enum ActionType {
  ADD = 'ADD',
  SELECT = 'SELECT',
  EDIT = 'EDIT',
  REMOVE = 'REMOVE',
  ROLLBACK = 'ROLLBACK',
}

export interface Action {
  type: ActionType;
  payload?: any;
}

export type ContactsReducer = (state: ContactsState, action: Action) => ContactsState;

export type ContactsContextType = [ContactsState, Dispatch<Action>];
