import { type ReactNode, useEffect } from 'react';
import { ClicksCounter } from './ClicksCounter';

type Props = {
    tabKey: string;
    children: ReactNode;
};

export function TabContent({ tabKey, children }: Props) {
    useEffect(() => {
        console.log(`${tabKey}: ✅ effect callback`);

        return () => {
            console.log(`${tabKey}: 🗑️ effect cleanup`);
        };
    }, [tabKey]);

    return (
        <div>
            {children}
            <ClicksCounter />
        </div>
    );
}
