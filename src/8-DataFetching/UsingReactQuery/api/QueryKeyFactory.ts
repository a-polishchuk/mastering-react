export enum Queries {
    USERS = 'users',
    USER_DETAILS = 'user-details',
    TODO_LIST = 'todo-list',
    LAST_UPDATED = 'last-updated',
}

export const QueryKeyFactory = {
    [Queries.USERS]: () => ['users', 'all'],
    [Queries.USER_DETAILS]: (userId: number) => ['users', userId],
    [Queries.TODO_LIST]: (userId: number) => ['todos', userId],
    [Queries.LAST_UPDATED]: () => ['lastUpdated'],
};
