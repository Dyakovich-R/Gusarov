import { Meta, StoryFn } from '@storybook/react';
import InputAnnotation from '../components/InputAnnotation';

export default {
  title: 'Components/InputAnnotation',
  component: InputAnnotation,
} as Meta<typeof InputAnnotation>;

const Template: StoryFn<typeof InputAnnotation> = args => (
  <InputAnnotation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'Additional information or validation message.',
};
