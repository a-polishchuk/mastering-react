import { ChapterWrapper, Toolbar } from 'components';

import { useHovered } from './useHovered';

interface EmojiHoverProps {
  idle: string;
  hover: string;
}

function EmojiHover({ idle, hover }: EmojiHoverProps): JSX.Element {
  const [isHovered, refCallback] = useHovered();

  return (
    <div ref={refCallback} style={{ fontSize: 48, cursor: 'pointer' }}>
      {isHovered ? hover : idle}
    </div>
  );
}

export function UseHoveredExample(): JSX.Element {
  return (
    <ChapterWrapper title="useHovered" subtitle="More custom hooks">
      <Toolbar>
        <EmojiHover idle="🐈" hover="🐈‍⬛" />
        <EmojiHover idle="🐘" hover="🦣" />
        <EmojiHover idle="🐠" hover="🐡" />
        <EmojiHover idle="🐴" hover="🦄" />
        <EmojiHover idle="🐵" hover="🙈" />
      </Toolbar>
    </ChapterWrapper>
  );
}
