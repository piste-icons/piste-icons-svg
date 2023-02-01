import 'react';

import { Color, COLORS, Size } from '../constants';

export interface CircleProps {
  color: Extract<Color, 'black' | 'blue' | 'green' | 'orange' | 'red'>;
  size: Size;
}

const Circle = ({ color, size }: CircleProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
    >
      <circle fill={COLORS[color]} cx={24} cy={24} r={22} />
    </svg>
  );
};

export default Circle;
