import React from 'react';

import { Rectangle } from '.';

export default {
  title: 'Ratings/Rectangle',
  component: Rectangle,
  argTypes: {
    color: {
      control: 'select',
    },
    size: {
      control: 'select',
    },
  },
};

const Template = (args) => <Rectangle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'red',
  size: 48,
};
