import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InputGroup from '../components/InputGroup';

export default {
  title: 'Components/InputGroup',
  component: InputGroup,
  argTypes: {
    onChange: { action: 'changed' },
    hasError: { control: 'boolean' },
  },
} as Meta<typeof InputGroup>;

const Template: StoryFn<typeof InputGroup> = (args) => {
  const [value, setValue] = useState('');
  return <InputGroup {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  inputId: 'username',
  annotation: 'Enter your username',
  placeholder: 'Enter username...',
  error: false,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Username',
  inputId: 'username',
  annotation: 'Username is required',
  placeholder: 'Enter username...',
  error: true,
};
