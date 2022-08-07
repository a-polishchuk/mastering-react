import { ChapterWrapper } from 'components';
import { SWRConfig } from 'swr';

import { fetcher } from './api/fetcher';
import { Profile } from './Profile/Profile';
import { TodoList } from './TodoList/TodoList';
import { TopPanel } from './TopPanel/TopPanel';

const SWR_CONFIG = {
  fetcher,
};

export function UsingSwr() {
  return (
    <ChapterWrapper title="SWR" subtitle="Data fetching">
      <SWRConfig value={SWR_CONFIG}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <TopPanel />
          <Profile />
          <TodoList />
        </div>
      </SWRConfig>
    </ChapterWrapper>
  );
}
