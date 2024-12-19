export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const tags = ["autodocs"];

// you can add global decorators here
// use it to add UI library theme providers
// and other global UI configurations
export const decorators = [
  (Story) => (
    <Story />
  ),
];