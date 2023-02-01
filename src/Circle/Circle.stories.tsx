import React from 'react';

import { Circle } from '.';

export default {
  title: 'Ratings/Circle',
  component: Circle,
  argTypes: {
    color: {
      control: 'select',
    },
    size: {
      control: 'select',
    },
  },
};

const Template = (args) => <Circle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'green',
  size: 48,
};
