import React from 'react';

import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
};

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'Enter a value',
};

export const Email = Template.bind({});
Email.args = {
  ...Default.args,
  label: 'Email',
  type: 'email',
  value: 'john.doe@gmail.com',
};

export const Password = Template.bind({});
Password.args = {
  ...Default.args,
  label: 'Password',
  type: 'password',
  value: '123456789',
};
