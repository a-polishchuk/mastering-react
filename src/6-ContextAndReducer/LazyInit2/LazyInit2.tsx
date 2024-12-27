import { ChapterWrapper } from 'components';
import { useReducer } from 'react';
import { buildMatrix } from './buildMatrix';
import { reducer } from './reducer';
import { DataTable } from './table/DataTable';
import { TableToolbar } from './TableToolbar';

const MAX_NUMBER = 30;
const MAX_POWER = 5;

export function LazyInit2() {
    const [data, dispatch] = useReducer(reducer, null, () => buildMatrix(MAX_NUMBER, MAX_POWER));

    return (
        <ChapterWrapper title="useReducer" subtitle="Lazy initialization (version 2)">
            <TableToolbar dispatch={dispatch} />
            <DataTable maxPower={MAX_POWER} data={data} dispatch={dispatch} />
        </ChapterWrapper>
    );
}
