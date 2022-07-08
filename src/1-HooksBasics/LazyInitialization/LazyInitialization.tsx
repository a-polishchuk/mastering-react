import { Button } from 'components/Button';
import { Toolbar } from 'components/Toolbar';
import { useState } from 'react';

import { HeaderRow } from './HeaderRow';
import { Row } from './Row';

const MAX_NUMBER = 30;
const MAX_POWER = 5;

type Matrix = number[][];

function buildMatrix(maxNumber: number, maxPow: number): Matrix {
  const data = [];
  for (let i = 0; i < maxNumber; i++) {
    const record = new Array(maxPow);
    for (let pow = 1; pow <= maxPow; pow++) {
      record[pow - 1] = Math.pow(i, pow);
    }
    data.push(record);
  }
  console.log(data);
  return data;
}

function getRowId(row: number[]): number {
  return row[0];
}

export function LazyInitialization(): JSX.Element {
  const [data, setData] = useState<Matrix>(() => {
    console.log('useState initialization');
    return buildMatrix(MAX_NUMBER, MAX_POWER);
  });

  const shuffle = () =>
    setData((prevValue) => {
      const copy = [...prevValue];
      copy.sort(() => (Math.random() > 0.5 ? 1 : -1));
      return copy;
    });

  const sortAscending = () =>
    setData((prevValue) => {
      const copy = [...prevValue];
      copy.sort((a, b) => getRowId(a) - getRowId(b));
      return copy;
    });

  const sortDescending = () =>
    setData((prevValue) => {
      const copy = [...prevValue];
      copy.sort((a, b) => getRowId(b) - getRowId(a));
      return copy;
    });

  const removeRow = (rowId: number) =>
    setData((prevValue) => {
      return prevValue.filter((row) => getRowId(row) !== rowId);
    });

  return (
    <>
      <h2>Lazy initialization</h2>

      <Toolbar>
        <Button text="⬆️ Sort" onClick={sortAscending} />
        <Button text="⬇️ Sort" onClick={sortDescending} />
        <Button text="🔀 Shuffle" onClick={shuffle} />
      </Toolbar>

      <table>
        <thead>
          <HeaderRow maxPow={MAX_POWER} />
        </thead>
        <tbody>
          {data.map((row) => (
            <Row key={getRowId(row)} rowId={getRowId(row)} array={row} onClick={removeRow} />
          ))}
        </tbody>
      </table>
    </>
  );
}
