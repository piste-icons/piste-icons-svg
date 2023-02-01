import React from 'react';

import { Square } from '.';

export default {
  title: 'Ratings/Square',
  component: Square,
  argTypes: {
    color: {
      control: 'select',
    },
    size: {
      control: 'select',
    },
  },
};

const Template = (args) => <Square {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'blue',
  size: 48,
};
