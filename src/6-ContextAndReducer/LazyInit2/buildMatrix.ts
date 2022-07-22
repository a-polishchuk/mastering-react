import { Matrix } from './types';

export function buildMatrix(maxNumber: number, maxPow: number): Matrix {
  const data = [];
  for (let i = 0; i < maxNumber; i++) {
    const record = new Array(maxPow);
    for (let pow = 1; pow <= maxPow; pow++) {
      record[pow - 1] = Math.pow(i, pow);
    }
    data.push(record);
  }
  return data;
}
