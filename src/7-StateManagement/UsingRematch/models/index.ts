import { Models } from '@rematch/core';

import { grid } from './grid/model';

export interface RootModel extends Models<RootModel> {
  grid: typeof grid;
}

export const models: RootModel = { grid };
