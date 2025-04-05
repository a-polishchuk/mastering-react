import { ChapterWrapper, ColoredBlock, TabsHeader } from 'components';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

const TABS = [
    { key: 'todos', label: '✅ Todos List' },
    { key: 'users', label: '👥 Users' },
    { key: 'comments', label: '💬 Comments' },
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
                    <Route path="todos" element={<span>Todos Tab</span>} />
                    <Route path="users" element={<span>Users Tab</span>} />
                    <Route path="comments" element={<span>Comments Tab</span>} />
                </Routes>
            </ColoredBlock>
        </ChapterWrapper>
    );
}

function useTabIndex() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const selectedIndex = TABS.findIndex((tab) => pathname.includes(tab.key));

    const setSelectedIndex = (index: number) => {
        const tabKey = TABS[index].key;
        const pathSegments = pathname.split('/');
        const lastSegment = pathSegments.at(-1);
        const parentPath = TABS.find((tab) => tab.key === lastSegment)
            ? pathSegments.slice(0, -1).join('/')
            : pathname;
        navigate(`${parentPath}/${tabKey}`);
    };

    return [selectedIndex, setSelectedIndex] as const;
}
