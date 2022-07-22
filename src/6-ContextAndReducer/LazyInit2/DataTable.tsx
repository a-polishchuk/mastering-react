import { Dispatch } from 'react';

import { getRowId } from './getRowId';
import { HeaderRow } from './HeaderRow';
import { Row } from './Row';
import { Action, ActionType, Matrix } from './types';

interface Props {
  maxPower: number;
  data: Matrix;
  dispatch: Dispatch<Action>;
}

export function DataTable({ maxPower, data, dispatch }: Props): JSX.Element {
  const handleRowClick = (rowId: number) => {
    dispatch({
      type: ActionType.REMOVE_ROW,
      payload: rowId,
    });
  };

  return (
    <table>
      <thead>
        <HeaderRow maxPower={maxPower} />
      </thead>
      <tbody>
        {data.map((row) => (
          <Row key={getRowId(row)} rowId={getRowId(row)} array={row} onClick={handleRowClick} />
        ))}
      </tbody>
    </table>
  );
}
