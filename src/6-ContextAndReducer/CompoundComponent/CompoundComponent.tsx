import { ChapterWrapper, RelatedDocs } from 'components';
import { ColorNode } from './ColorNode';
import { ColorProvider } from './ColorProvider';
import classes from './CompoundComponent.module.css';

export function CompoundComponent() {
    return (
        <ChapterWrapper
            title="Compound Component"
            subtitle="Implementing a 'compound component' pattern with React.Context"
            contentClassName={classes.content}
        >
            <div>
                <ColorNode>
                    <ColorNode>
                        <ColorProvider color="#d4ee40">
                            <ColorNode>
                                <ColorNode />
                            </ColorNode>
                        </ColorProvider>
                    </ColorNode>
                    <ColorProvider color="#47d07b">
                        <ColorNode>
                            <ColorNode />
                            <ColorNode />
                        </ColorNode>
                    </ColorProvider>
                    <ColorNode>
                        <ColorNode />
                        <ColorNode />
                        <ColorNode>
                            <ColorProvider color="#f466f9">
                                <ColorNode />
                                <ColorNode />
                                <ColorNode />
                            </ColorProvider>
                        </ColorNode>
                    </ColorNode>
                </ColorNode>
            </div>

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
