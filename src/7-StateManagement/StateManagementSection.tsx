import { Chapter, Section } from 'components/MasterDetail';
import { RouterPath } from 'config/RouterPath';
import { UsingJotai } from './UsingJotai/UsingJotai';
import { UsingRematch } from './UsingRematch/UsingRematch';
import { UsingZustand } from './UsingZustand/UsingZustand';

export function StateManagementSection() {
    return (
        <Section title="State management">
            <Chapter
                emoji="🤹🏼‍♂️"
                title="Rematch (Redux)"
                path={RouterPath.STATE_REMATCH}
                element={<UsingRematch />}
            />
            <Chapter
                emoji="🤹🏼‍♂️"
                title="Zustand"
                path={RouterPath.STATE_ZUSTAND}
                element={<UsingZustand />}
            />
            <Chapter
                emoji="🤹🏼‍♂️"
                title="Jotai"
                path={RouterPath.STATE_JOTAI}
                element={<UsingJotai />}
            />
        </Section>
    );
}
