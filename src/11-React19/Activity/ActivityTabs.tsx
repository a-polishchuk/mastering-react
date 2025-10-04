import { Activity } from 'react';
import type { TabsProps } from './types';

export function ActivityTabs({ activeTabKey, items }: TabsProps) {
    return (
        <>
            {items.map(({ tabKey, content }) => (
                <Activity key={tabKey} mode={tabKey === activeTabKey ? 'visible' : 'hidden'}>
                    {content}
                </Activity>
            ))}
        </>
    );
}
