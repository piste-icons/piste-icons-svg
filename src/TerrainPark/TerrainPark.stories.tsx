import React from 'react';

import { TerrainPark } from '.';

export default {
  title: 'Ratings/TerrainPark',
  component: TerrainPark,
  argTypes: {
    color: {
      control: 'select',
    },
    size: {
      control: 'select',
    },
  },
};

const Template = (args) => <TerrainPark {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'orange',
  size: 48,
};
