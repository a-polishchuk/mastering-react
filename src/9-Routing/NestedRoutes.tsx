import { ChapterWrapper, ColoredBlock, TabsHeader } from 'components';
import { RouterPath } from 'config/RouterPath';
import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router';

const TABS_PATH = 'tabs';
const TABS = [
    {
        path: 'todos',
        label: '✅ Todos List',
        element: <span>Todos Tab</span>,
    },
    {
        path: 'users',
        label: '👥 Users',
        element: <span>Users Tab</span>,
    },
    {
        path: 'comments',
        label: '💬 Comments',
        element: <span>Comments Tab</span>,
    },
];

export function NestedRoutes() {
    const [selectedIndex, setSelectedIndex] = useTabIndex();
    const tabLabels = TABS.map((tab) => tab.label);

    return (
        <ChapterWrapper title="Nested Routes" subtitle="React Router">
            <TabsHeader
                tabs={tabLabels}
                selectedIndex={selectedIndex}
                onSelect={setSelectedIndex}
            />
            <ColoredBlock style={{ marginTop: '1rem' }}>
                <Routes>
                    <Route index element={<span>Select a tab</span>} />
                    <Route path="*" element={<span>Nested route not found</span>} />
                    <Route path={TABS_PATH}>
                        <Route element={<Layout />}>
                            {TABS.map(({ path, element }) => (
                                <Route key={path} path={path} element={element} />
                            ))}
                        </Route>
                    </Route>
                </Routes>
            </ColoredBlock>
        </ChapterWrapper>
    );
}

function Layout() {
    return (
        <ColoredBlock>
            <Outlet />
        </ColoredBlock>
    );
}

function useTabIndex() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const selectedIndex = TABS.findIndex((tab) => pathname.includes(tab.path));

    const setSelectedIndex = (index: number) => {
        const parentPath = RouterPath.NESTED_ROUTES.slice(0, -2);
        const tabPath = TABS[index].path;
        navigate(`/${parentPath}/${TABS_PATH}/${tabPath}`);
    };

    return [selectedIndex, setSelectedIndex] as const;
}
