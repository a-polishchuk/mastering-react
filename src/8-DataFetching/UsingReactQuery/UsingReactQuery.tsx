import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChapterWrapper } from 'components';

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

export function UsingReactQuery(): JSX.Element {
  return (
    <ChapterWrapper title="React Query" subtitle="Data fetching">
      <QueryClientProvider client={queryClient}>
        <TopPanel />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Profile />
          <TodoList />
        </div>
      </QueryClientProvider>
    </ChapterWrapper>
  );
}
