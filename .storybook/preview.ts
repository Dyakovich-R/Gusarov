export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  docs: { inlineStories: true },
  viewport: {
    viewports: {
      small: {
        name: 'Small',
        styles: {
          width: '320px',
          height: '640px',
        },
      },
      medium: {
        name: 'Medium',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      large: {
        name: 'Large',
        styles: {
          width: '1280px',
          height: '720px',
        },
      },
    },
  },
};
export const tags = ["autodocs", 'autodocs'];
