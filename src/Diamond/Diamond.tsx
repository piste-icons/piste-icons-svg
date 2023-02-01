import 'react';

import { Color, COLORS, Size } from '../constants';

export interface DiamondProps {
  color: Extract<Color, 'black' | 'red'>;
  size: Size;
}

const Diamond = ({ color, size }: DiamondProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
    >
      <path fill={COLORS[color]} d="m26 48 22-22L26 4 4 26l22 22Z" />
    </svg>
  );
};

export default Diamond;
