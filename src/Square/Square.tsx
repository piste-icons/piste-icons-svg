import 'react';

import { ColorExtract, COLORS, Size } from '../constants';

export interface SquareProps {
  color: ColorExtract<'blue' | 'orange'>;
  size: Size;
}

const Square = ({ color, size }: SquareProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
    >
      <path fill={COLORS[color]} d="M4 4h48v48H4z" />
    </svg>
  );
};

export default Square;
