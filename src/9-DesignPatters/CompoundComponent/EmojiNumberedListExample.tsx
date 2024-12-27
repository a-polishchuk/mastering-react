import { ChapterWrapper, TextBlock } from 'components';
import { EmojiNumberedList } from './EmojiNumberedList';

const FRUITS = [
    'Apple 🍎',
    'Pear 🍐',
    'Orange 🍊',
    'Lemon 🍋',
    'Banana 🍌',
    'Watermelon 🍉',
    'Grapes 🍇',
    'Strawberry 🍓',
    'Blueberry 🫐',
    'Cherry 🍒',
    'Peach 🍑',
    'Pineapple 🍍',
    'Kiwi 🥝',
];

export function EmojiNumberedListExample() {
    return (
        <ChapterWrapper title="Emoji numbered list" subtitle="Compound component">
            <TextBlock>
                This list is constructed of <code>EmojiNumberedList</code> component + array of{' '}
                <code>child components</code>.
            </TextBlock>

            <TextBlock>
                <EmojiNumberedList>{FRUITS}</EmojiNumberedList>
            </TextBlock>

            <TextBlock>
                <EmojiNumberedList>
                    <div>One</div>
                    <div>Two</div>
                    <div>Three</div>
                    <div>Four</div>
                    <div>Five</div>
                </EmojiNumberedList>
            </TextBlock>
        </ChapterWrapper>
    );
}
