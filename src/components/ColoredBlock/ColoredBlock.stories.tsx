import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ColoredBlock, ColoredBlockProps } from './ColoredBlock';

export default {
    component: ColoredBlock,
} as Meta<typeof ColoredBlock>;

export const Default: StoryObj<typeof ColoredBlock> = {
    args: {
        children: 'Colored block with a simple text inside',
        onClick: fn(),
    },
};

export const RandomColors: StoryObj<ColoredBlockProps & { numberOfBlocks: number }> = {
    args: {
        numberOfBlocks: 10,
        children: 'Each colored block has a random color',
        onClick: fn(),
    },
    render: ({ numberOfBlocks, ...args }) => {
        const array = Array.from({ length: numberOfBlocks }, (_val, index) => (
            <ColoredBlock key={index} {...args} />
        ));

        return <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>{array}</div>;
    },
};
