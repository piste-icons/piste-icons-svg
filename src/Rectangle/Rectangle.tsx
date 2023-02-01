import 'react';

import { ColorExtract, COLORS, Size } from '../constants';

export interface RectangleProps {
  color: ColorExtract<'red'>;
  size: Size;
}

const Rectangle = ({ color, size }: RectangleProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
    >
      <path fill={COLORS[color]} d="M4 14h44v20H4z" />
    </svg>
  );
};

export default Rectangle;
