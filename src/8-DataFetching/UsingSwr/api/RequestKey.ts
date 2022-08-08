export const RequestKey = {
  user: (userId: number) => `users/${userId}`,
  todos: (userId: number) => `todos?userId=${userId}`,
};
