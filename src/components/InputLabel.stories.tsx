import { Meta, StoryFn } from '@storybook/react';
import {InputLabel} from '../components/InputLabel';

export default {
  title: 'Components/InputLabel',
  component: InputLabel,
} as Meta<typeof InputLabel>;

const Template: StoryFn<typeof InputLabel> = args => <InputLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  htmlFor: 'inputId',
  label: 'Input Label',
};
