import { v4 as uuidv4 } from 'uuid';
import { ContactsState } from './types';

export const initialState: ContactsState = {
  contacts: [
    {
      id: uuidv4(),
      name: 'Tiger',
      phone: '555-123-123',
    },
    {
      id: uuidv4(),
      name: 'Sam',
      phone: '555-123-123',
    },
  ],
  selectedId: null,
};
