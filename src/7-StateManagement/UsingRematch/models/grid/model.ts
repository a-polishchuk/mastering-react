import { createModel } from '@rematch/core';

import { clear } from './clear';
import { empty } from './empty';
import { nextGeneration } from './nextGeneration';
import { randomize } from './randomize';
import { toggleCell } from './toggleCell';

import type { RootModel } from '../index';

export const grid = createModel<RootModel>()({
  state: empty(30, 30),
  reducers: {
    nextGeneration,
    toggleCell,
    randomize,
    clear,
  },
});
