import 'react';

import { ColorExtract, COLORS, Size } from '../constants';

export interface DoubleDiamondProps {
  color: ColorExtract<'black'>;
  size: Size;
}

const DoubleDiamond = ({ color, size }: DoubleDiamondProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
    >
      <path
        fill={COLORS[color]}
        d="M12.4 44.8 23.2 24 12.4 3.2 1.6 24l10.8 20.8zM35.6 3.2 46.4 24 35.6 44.8 24.8 24 35.6 3.2z"
      />
    </svg>
  );
};

export default DoubleDiamond;
