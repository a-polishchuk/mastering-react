import { type TabsProps } from './types';

export function RemountTabs({ activeTabKey, items }: TabsProps) {
    const activeTabItem = items.find((i) => i.tabKey === activeTabKey);

    return <>{activeTabItem?.content}</>;
}
