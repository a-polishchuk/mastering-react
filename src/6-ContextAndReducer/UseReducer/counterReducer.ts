import { Action } from './Action';

export const INITIAL_COUNT = 0;

export type CounterReducer = (count: number, action: Action) => number;

export function counterReducer(count: number, action: Action): number {
  switch (action) {
    case Action.INCREMENT:
      return count + 1;
    case Action.DOUBLE:
      return count * 2;
    case Action.POWER_2:
      return count * count;
    case Action.RESET:
      return INITIAL_COUNT;
    default:
      throw new Error(`Action ${action} was not recognized`);
  }
}
