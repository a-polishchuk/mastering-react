import { type TabsProps } from './types';

export function DisplayTabs({ activeTabKey, items }: TabsProps) {
    return (
        <>
            {items.map(({ tabKey, content }) => (
                <div
                    key={tabKey}
                    style={{
                        display: tabKey === activeTabKey ? undefined : 'none',
                    }}
                >
                    {content}
                </div>
            ))}
        </>
    );
}
