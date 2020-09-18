import React from 'react';

import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  decorators: [
    Story => <div style={{ padding: '2rem', background: '#ccc' }}><Story /></div>
  ]
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};
