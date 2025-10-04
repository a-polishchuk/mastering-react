import type { ReactNode } from 'react';

export type TabItem = {
    tabKey: string;
    title: string;
    content: ReactNode;
};

export type TabsProps = {
    activeTabKey: string;
    items: TabItem[];
};
