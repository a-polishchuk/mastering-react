import { Chapter, Section } from 'components/MasterDetail';
import { RouterPath } from 'config/RouterPath';
import { EmojiNumberedListExample } from './CompoundComponent/EmojiNumberedListExample';
import { ToggleButtonExample } from './CompoundComponent/ToggleButtonExample';
import { HooksFactory } from './HooksFactory/HooksFactory';

export function DesignPatternsSection() {
    return (
        <Section title="Design patterns">
            <Chapter
                emoji="🏭"
                title="Hooks factory"
                path={RouterPath.HOOKS_FACTORY}
                element={<HooksFactory />}
            />
            <Section title="Compound component">
                <Chapter
                    emoji="🔢"
                    title="Emoji numbered list"
                    path={RouterPath.EMOJI_NUMBERED_LIST}
                    element={<EmojiNumberedListExample />}
                />
                <Chapter
                    emoji="🎛"
                    title="Toggle button"
                    path={RouterPath.TOGGLE_BUTTON}
                    element={<ToggleButtonExample />}
                />
            </Section>
        </Section>
    );
}
