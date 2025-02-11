import { UserContextProvider } from '8-DataFetching/UserContext';
import { ChapterWrapper, Tabs } from 'components';
import { SWRConfig } from 'swr';
import { fetcher } from './api/fetcher';
import { Profile } from './Profile';
import { TodoList } from './TodoList';
import { TopPanel } from './TopPanel/TopPanel';

const TABS: string[] = ['👤 User Profile', '✅ Todos List'];

export function UsingSwr() {
    return (
        <ChapterWrapper title="SWR" subtitle="Data fetching">
            <SWRConfig value={{ fetcher }}>
                <UserContextProvider>
                    <TopPanel />
                    <Tabs tabs={TABS}>
                        <Profile />
                        <TodoList />
                    </Tabs>
                </UserContextProvider>
            </SWRConfig>
        </ChapterWrapper>
    );
}
