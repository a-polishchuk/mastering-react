export enum Queries {
    USER_DETAILS = 'user-details',
    TODO_LIST = 'todo-list',
    LAST_UPDATED = 'last-updated',
}

export const QueryKeyFactory = {
    [Queries.USER_DETAILS]: (userId: number): string => `users/${userId}`,
    [Queries.TODO_LIST]: (userId: number): string => `todos?userId=${userId}`,
    [Queries.LAST_UPDATED]: (): string => 'lastUpdated',
};
