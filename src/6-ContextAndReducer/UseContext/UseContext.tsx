import { ChapterWrapper, Toolbar, RelatedDocs } from 'components';
import { ThemeButton } from './Theme/ThemeButton';
import { ThemeProvider } from './Theme/ThemeContext';
import { ThemeToolbar } from './Theme/ThemeToolbar';
import { UserProvider } from './User/UserContext';
import { UserProfile } from './User/UserProfile';

export function UseContext() {
    return (
        <ChapterWrapper title="useContext" subtitle="Solving the props drilling problem">
            <ThemeProvider>
                {/* you can get current theme in any component in this subtree */}
                <ThemeToolbar />
                <Toolbar>
                    <ThemeButton text="Primary Button" />
                    <ThemeButton text="Disabled Button" disabled />
                </Toolbar>
                <UserProvider userId={1}>
                    {/* you can get user details in any component in this subtree */}
                    <UserProfile />
                </UserProvider>
            </ThemeProvider>

            <RelatedDocs
                docs={[
                    {
                        label: 'useContext Hook Reference',
                        href: 'https://react.dev/reference/react/useContext',
                    },
                    {
                        label: 'Passing Data Deeply with Context',
                        href: 'https://react.dev/learn/passing-data-deeply-with-context',
                    },
                    {
                        label: 'Scaling Up with Reducer and Context',
                        href: 'https://react.dev/learn/scaling-up-with-reducer-and-context',
                    },
                    {
                        label: 'createContext API Reference',
                        href: 'https://react.dev/reference/react/createContext',
                    },
                ]}
            />
        </ChapterWrapper>
    );
}
