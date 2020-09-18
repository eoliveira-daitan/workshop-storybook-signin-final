import React from 'react';

import SignInForm, { steps } from './SignInForm';

export default {
  title: 'Molecules/SignInForm',
  component: SignInForm,
};

const Template = args => <SignInForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: {
    email: '',
    password: '',
  },
};

export const FillEmailStep = Template.bind({});
FillEmailStep.args = {
  step: steps.fillEmail,
  user: {
    email: 'john.doe@gmail.com',
  },
};

export const FillPasswordStep = Template.bind({});
FillPasswordStep.args = {
  step: steps.fillPassword,
  user: {
    email: 'john.doe@gmail.com',
    password: '123456789',
  },
};
