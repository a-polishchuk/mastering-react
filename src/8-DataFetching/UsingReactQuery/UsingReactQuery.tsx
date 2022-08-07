import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChapterWrapper } from 'components';

import { queryFunction } from './api';
import { Profile } from './Profile/Profile';
import { TodoList } from './TodoList/TodoList';
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

// TODO: recheck if it works with react router v6
// ! should be a default export in order to use dynamic import
export function UsingReactQuery(): JSX.Element {
  return (
    <ChapterWrapper title="React Query" subtitle="Data fetching">
      <QueryClientProvider client={queryClient}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <TopPanel />
          <Profile />
          <TodoList />
        </div>
      </QueryClientProvider>
    </ChapterWrapper>
  );
}
