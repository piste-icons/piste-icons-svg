import React from 'react';

import { DoubleDiamond } from '.';

export default {
  title: 'Ratings/DoubleDiamond',
  component: DoubleDiamond,
  argTypes: {
    color: {
      control: 'select',
    },
    size: {
      control: 'select',
    },
  },
};

const Template = (args) => <DoubleDiamond {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'black',
  size: 48,
};
