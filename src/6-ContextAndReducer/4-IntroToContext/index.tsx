import { ChapterWrapper, RelatedDocs } from 'components';
import { FirstContextProvider, useFirstContext } from './FirstContext';

export function IntroToContextChapter() {
    return (
        <ChapterWrapper title="Intro to Context" subtitle="Dependency injection with React.Context">
            <FirstContextProvider>
                <A />
            </FirstContextProvider>

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

function A() {
    return <B />;
}

function B() {
    return <C />;
}

function C() {
    return <FirstContextConsumer />;
}

function FirstContextConsumer() {
    const value = useFirstContext();
    return <h1>{value}</h1>;
}
