import { ChapterWrapper, Toolbar } from 'components';
import { RelatedDocs } from 'components/RelatedDocs/RelatedDocs';
import { useHovered } from 'hooks/useHovered';

type EmojiHoverProps = {
    idle: string;
    hover: string;
};

function EmojiHover({ idle, hover }: EmojiHoverProps) {
    const [isHovered, refCallback] = useHovered();

    return (
        <div ref={refCallback} style={{ fontSize: 48, cursor: 'pointer' }}>
            {isHovered ? hover : idle}
        </div>
    );
}

export function UseHoveredExample() {
    return (
        <ChapterWrapper title="useHovered" subtitle="More custom hooks">
            <Toolbar>
                <EmojiHover idle="🐈" hover="🐈‍⬛" />
                <EmojiHover idle="🐘" hover="🦣" />
                <EmojiHover idle="🐠" hover="🐡" />
                <EmojiHover idle="🐴" hover="🦄" />
                <EmojiHover idle="🐵" hover="🙈" />
            </Toolbar>

            <RelatedDocs
                docs={[
                    {
                        label: 'Custom Hooks: Sharing logic between components',
                        href: 'https://react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-sharing-logic-between-components',
                    },
                ]}
            />
        </ChapterWrapper>
    );
}
