import { generateRandomInt } from 'utils/generateRandomInt';
import { getRandomArrayElement } from 'utils/getRandomArrayElement';
import { VEGETABLES } from '../../constants';
import { GameContextState, Vegetable } from '../../types';
import { buildGrid } from './gridUtils';

export function spawnVegetable(state: GameContextState): GameContextState {
  const { rows, cols, snakeHead, vegetables } = state;

  const randomVegetable: Vegetable = {
    row: generateRandomInt(0, rows - 1),
    col: generateRandomInt(0, cols - 1),
    character: getRandomArrayElement(VEGETABLES),
  };

  return {
    ...state,
    vegetables: [...vegetables, randomVegetable],
    grid: buildGrid(rows, cols, snakeHead, vegetables),
  };
}
