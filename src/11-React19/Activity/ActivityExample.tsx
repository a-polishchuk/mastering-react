import { ChapterWrapper, RelatedDocs } from 'components';
import { useState } from 'react';
import classes from './ActivityExample.module.css';
import { RemountTabs } from './RemountTabs';
import { TabContent } from './TabContent';
import { TabsHeader } from './TabsHeader';
import { type TabItem } from './types';

export function ActivityExample() {
    const [activeTabKey, setActiveTabKey] = useState(ITEMS[0].tabKey);

    return (
        <ChapterWrapper
            title="Activity"
            subtitle="New component in React 19.2"
            contentClassName={classes.root}
        >
            <TabsHeader items={ITEMS} activeTabKey={activeTabKey} onChange={setActiveTabKey} />

            <RemountTabs activeTabKey={activeTabKey} items={ITEMS} />

            <RelatedDocs
                docs={[
                    {
                        label: 'Activity',
                        href: 'https://react.dev/reference/react/Activity',
                    },
                ]}
            />
        </ChapterWrapper>
    );
}

const ITEMS: TabItem[] = [
    {
        tabKey: 'first',
        title: 'First',
        content: (
            <TabContent key="first" tabKey="first">
                First tab content
            </TabContent>
        ),
    },
    {
        tabKey: 'second',
        title: 'Second',
        content: (
            <TabContent key="second" tabKey="second">
                Second tab content
            </TabContent>
        ),
    },
];
