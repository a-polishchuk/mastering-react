import { getRowId } from './getRowId';
import { Action, ActionType, Matrix } from './types';

export function reducer(matrix: Matrix, action: Action): Matrix {
  switch (action.type) {
    case ActionType.SORT_ASC:
      return sortAscending(matrix);
    case ActionType.SORT_DESC:
      return sortDescending(matrix);
    case ActionType.SHUFFLE:
      return shuffle(matrix);
    case ActionType.REMOVE_ROW:
      return removeRow(matrix, action.payload);
    default:
      throw new Error(`Action type ${action.type} was no recognized`);
    // return matrix; // ! DO NOT return current state in the default clause !
  }
}

function sortAscending(matrix: Matrix): Matrix {
  const copy = [...matrix];
  copy.sort((a, b) => getRowId(a) - getRowId(b));
  return copy;
}

function sortDescending(matrix: Matrix): Matrix {
  const copy = [...matrix];
  copy.sort((a, b) => getRowId(b) - getRowId(a));
  return copy;
}

function shuffle(matrix: Matrix): Matrix {
  const copy = [...matrix];
  copy.sort(() => (Math.random() > 0.5 ? 1 : -1));
  return copy;
}

function removeRow(matrix: Matrix, rowId: number): Matrix {
  return matrix.filter((row) => getRowId(row) !== rowId);
}
