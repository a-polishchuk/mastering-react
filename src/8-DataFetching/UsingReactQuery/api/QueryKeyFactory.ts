import { QueryKey } from '@tanstack/react-query';

export enum Queries {
  USER_DETAILS = 'user-details',
  TODO_LIST = 'todo-list',
  LAST_UPDATED = 'last-updated',
}

export const QueryKeyFactory = {
  [Queries.USER_DETAILS]: (userId: number): QueryKey => {
    return [`users/${userId}`];
  },
  [Queries.TODO_LIST]: (userId: number): QueryKey => {
    return [`todos?userId=${userId}`];
  },
  [Queries.LAST_UPDATED]: (): QueryKey => {
    return ['lastUpdated'];
  },
};
