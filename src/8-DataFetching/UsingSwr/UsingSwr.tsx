import { ChapterWrapper } from 'components';
import { SWRConfig } from 'swr';

import { fetcher } from './api/fetcher';
import { Profile } from './Profile';
import { TodoList } from './TodoList';
import { TopPanel } from './TopPanel/TopPanel';

const SWR_CONFIG = {
  fetcher,
};

export function UsingSwr() {
  return (
    <ChapterWrapper title="SWR" subtitle="Data fetching">
      <SWRConfig value={SWR_CONFIG}>
        <TopPanel />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Profile />
          <TodoList />
        </div>
      </SWRConfig>
    </ChapterWrapper>
  );
}
