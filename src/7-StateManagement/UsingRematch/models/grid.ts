import { clear } from '7-StateManagement/model/clear';
import { empty } from '7-StateManagement/model/empty';
import { nextGeneration } from '7-StateManagement/model/nextGeneration';
import { randomize } from '7-StateManagement/model/randomize';
import { toggleCell } from '7-StateManagement/model/toggleCell';
import { createModel } from '@rematch/core';

import type { RootModel } from '.';

export const grid = createModel<RootModel>()({
  state: empty(30, 30),
  reducers: {
    toggleCell,
    nextGeneration,
    randomize,
    clear,
  },
});
