import React from 'react';

import { Diamond } from '.';

export default {
  title: 'Ratings/Diamond',
  component: Diamond,
  argTypes: {
    color: {
      control: 'select',
    },
    size: {
      control: 'select',
    },
  },
};

const Template = (args) => <Diamond {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'black',
  size: 48,
};
