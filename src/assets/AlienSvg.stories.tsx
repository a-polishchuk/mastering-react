import type { Meta, StoryObj } from '@storybook/react';

import { AlienSvg, AlienSvgProps } from './AlienSvg';

export default {
  component: AlienSvg,
} as Meta<typeof AlienSvg>;

export const Default: StoryObj<AlienSvgProps> = {
  args: {
    size: 150,
    eyesColor: '#242424',
    mouthColor: '#242424',
    fillColor: '#ccd6dd',
  },
};

export const ArmyOfGreenAliens: StoryObj<AlienSvgProps & { numberOfAliens: number }> = {
  args: {
    numberOfAliens: 100,
    size: 24,
    eyesColor: '#ffffff',
    mouthColor: '#ffffff',
    fillColor: '#07ca2c',
  },
  render: ({ numberOfAliens, ...args }) => {
    const array = Array.from({ length: numberOfAliens }, (_val, index) => (
      <AlienSvg key={index} {...args} />
    ));

    return <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>{array}</div>;
  },
};
