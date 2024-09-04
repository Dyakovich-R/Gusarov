import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {InputText} from '../components/InputText';

export default {
  title: 'Components/InputText',
  component: InputText,
  argTypes: {
    onChange: { action: 'changed' },
    hasError: { control: 'boolean' },
  },
} as Meta<typeof InputText>;

const Template: StoryFn<typeof InputText> = args => {
  const [value, setValue] = useState('');
  return (
    <InputText
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text...',
  id: 'inputId',
  error: false,
};

export const WithError = Template.bind({});
WithError.args = {
  placeholder: 'Enter text...',
  id: 'inputId',
  error: true,
};
