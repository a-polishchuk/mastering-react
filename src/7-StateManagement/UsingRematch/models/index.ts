import { Models } from '@rematch/core';
import { grid } from './grid';

export interface RootModel extends Models<RootModel> {
  grid: typeof grid;
}

export const models: RootModel = { grid };
