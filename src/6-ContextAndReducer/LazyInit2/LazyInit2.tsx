import { ChapterHeader } from 'components/ChapterHeader';
import { useReducer } from 'react';

import { buildMatrix } from './buildMatrix';
import { DataTable } from './DataTable';
import { reducer } from './reducer';
import { TableToolbar } from './TableToolbar';

const MAX_NUMBER = 30;
const MAX_POWER = 5;

export function LazyInit2(): JSX.Element {
  const [data, dispatch] = useReducer(reducer, null, () => buildMatrix(MAX_NUMBER, MAX_POWER));

  return (
    <>
      <ChapterHeader title="useState" subtitle="Lazy initialization" />
      <TableToolbar dispatch={dispatch} />
      <DataTable maxPower={MAX_POWER} data={data} dispatch={dispatch} />
    </>
  );
}
