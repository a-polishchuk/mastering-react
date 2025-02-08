import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ChapterWrapper, Tabs } from 'components';
import { Profile } from './Profile';
import { TodoList } from './TodoList';
import { TopPanel } from './TopPanel/TopPanel';

const TABS: string[] = ['👤 User Profile', '✅ Todos List'];

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnReconnect: true,
            refetchOnWindowFocus: true,
        },
    },
});

export function UsingReactQuery() {
    return (
        <ChapterWrapper title="React Query" subtitle="Data fetching">
            <QueryClientProvider client={queryClient}>
                <TopPanel />
                <Tabs tabs={TABS}>
                    <Profile />
                    <TodoList />
                </Tabs>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ChapterWrapper>
    );
}
