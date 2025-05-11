import { Chapter, Section } from 'components/MasterDetail';
import { RouterPath } from 'config/RouterPath';
import { lazy } from 'react';

const UsingRematch = lazy(() => import('./UsingRematch'));
const UsingZustand = lazy(() => import('./UsingZustand'));
const UsingJotai = lazy(() => import('./UsingJotai'));

export function StateManagementSection() {
    return (
        <Section title="State management">
            <Chapter
                emoji="🗃️"
                title="Rematch / Redux"
                path={RouterPath.STATE_REMATCH}
                element={<UsingRematch />}
            />
            <Chapter
                emoji="🗃️"
                title="Zustand"
                path={RouterPath.STATE_ZUSTAND}
                element={<UsingZustand />}
            />
            <Chapter
                emoji="🗃️"
                title="Jotai"
                path={RouterPath.STATE_JOTAI}
                element={<UsingJotai />}
            />
        </Section>
    );
}
