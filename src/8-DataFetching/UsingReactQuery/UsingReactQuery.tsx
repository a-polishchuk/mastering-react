import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChapterWrapper, Tabs } from 'components';
import { useState } from 'react';

import { queryFunction } from './api';
import { Profile } from './Profile';
import { TodoList } from './TodoList';
import { TopPanel } from './TopPanel/TopPanel';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: queryFunction,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  },
});

const TABS: string[] = ['👤 User Profile', '✅ Todos List'];

export function UsingReactQuery(): JSX.Element {
  const [selectedTab, setSelectedTab] = useState<string>(TABS[0]);

  return (
    <ChapterWrapper title="React Query" subtitle="Data fetching">
      <QueryClientProvider client={queryClient}>
        <TopPanel />
        <Tabs tabs={TABS} selectedTab={selectedTab} onSelectedTabChange={setSelectedTab} />
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column' }}>
          {selectedTab === TABS[0] ? <Profile /> : selectedTab === TABS[1] ? <TodoList /> : null}
        </div>
      </QueryClientProvider>
    </ChapterWrapper>
  );
}
