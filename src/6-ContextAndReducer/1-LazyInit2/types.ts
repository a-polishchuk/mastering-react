export type Matrix = number[][];

export enum ActionType {
    SORT_ASC = 'SORT_ASC',
    SORT_DESC = 'SORT_DESC',
    SHUFFLE = 'SHUFFLE',
    REMOVE_ROW = 'REMOVE_ROW',
}

export type Action =
    | {
          type: ActionType.SORT_ASC;
      }
    | {
          type: ActionType.SORT_DESC;
      }
    | {
          type: ActionType.SHUFFLE;
      }
    | {
          type: ActionType.REMOVE_ROW;
          rowId: number;
      };
