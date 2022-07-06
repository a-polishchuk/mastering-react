import { createContext, useContext, FC } from 'react';

export interface MasterDetailState {
  selectedTitle: string | null;
  DetailComponent: FC | null;
  selectChapter: (title: string | null, component: FC | null) => void;
}

const defaultValue: MasterDetailState = {
  selectedTitle: null,
  DetailComponent: null,
  selectChapter: () => {
    // do nothing here, dummy implementation
  },
};

export const MasterDetailContext = createContext<MasterDetailState>(defaultValue);

export function useMasterDetailContext() {
  return useContext(MasterDetailContext);
}
