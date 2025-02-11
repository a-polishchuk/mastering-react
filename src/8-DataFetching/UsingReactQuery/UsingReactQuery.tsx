import { UserContextProvider } from '8-DataFetching/UserContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ChapterWrapper, Tabs } from 'components';
import { Profile } from './Profile';
import { TodoList } from './TodoList';
import { TopPanel } from './TopPanel/TopPanel';
import { Users } from './Users';

const TABS: string[] = ['✅ Todos List', '👥 Users', '👤 User Profile'];

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnReconnect: true,
            refetchOnWindowFocus: true,
            staleTime: 1000 * 60 * 5, // 5 minutes
            gcTime: 1000 * 60, // 1 minute (only for inactive queries)
        },
    },
});

export function UsingReactQuery() {
    return (
        <ChapterWrapper title="React Query" subtitle="Data fetching">
            <QueryClientProvider client={queryClient}>
                <UserContextProvider>
                    <TopPanel />
                    <Tabs tabs={TABS}>
                        <TodoList />
                        <Users />
                        <Profile />
                    </Tabs>
                </UserContextProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ChapterWrapper>
    );
}
