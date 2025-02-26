import { QueryKey } from '@tanstack/react-query';

export enum Queries {
    USERS = 'users',
    USER_DETAILS = 'user-details',
    TODO_LIST = 'todo-list',
    LAST_UPDATED = 'last-updated',
}

export const QueryKeyFactory = {
    [Queries.USERS]: (): QueryKey => ['users', 'all'],
    [Queries.USER_DETAILS]: (userId: number): QueryKey => ['users', userId],
    [Queries.TODO_LIST]: (userId: number): QueryKey => ['todos', userId],
    [Queries.LAST_UPDATED]: (): QueryKey => ['lastUpdated'],
};
