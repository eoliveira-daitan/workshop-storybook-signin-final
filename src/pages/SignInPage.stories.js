import React from 'react';

import SignInPage from './SignInPage';

export default {
  title: 'Pages/SignInPage',
  component: SignInPage,
};

const Template = args => <SignInPage {...args} />;

export const Default = Template.bind({});
