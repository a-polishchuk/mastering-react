import { cloneDeep, merge } from 'lodash';
import { useState } from 'react';
import { DeepPartial } from 'tsdef';

type UseMergeState<T> = [T, (change: DeepPartial<T>) => void];

export function useMergedState<T>(initialState: T): UseMergeState<T> {
  const [state, setState] = useState<T>(initialState);

  const mergeState = (changes: DeepPartial<T>) => {
    setState((prevState) => {
      const clone = cloneDeep(prevState);
      return merge(clone, changes);
    });
  };

  return [state, mergeState];
}
