import { ChapterWrapper, Tabs } from 'components';
import { SWRConfig } from 'swr';

import { fetcher } from './api/fetcher';
import { Profile } from './Profile';
import { TodoList } from './TodoList';
import { TopPanel } from './TopPanel/TopPanel';

const TABS: string[] = ['👤 User Profile', '✅ Todos List'];

export function UsingSwr(): JSX.Element {
  return (
    <ChapterWrapper title="SWR" subtitle="Data fetching">
      <SWRConfig value={{ fetcher }}>
        <TopPanel />
        <Tabs tabs={TABS}>
          <Profile />
          <TodoList />
        </Tabs>
      </SWRConfig>
    </ChapterWrapper>
  );
}
