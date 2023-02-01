import 'react';

import { ColorExtract, COLORS, Size } from '../constants';

export interface TerrainParkProps {
  color: ColorExtract<'orange'>;
  size: Size;
}

const TerrainPark = ({
  color,
  size,
}: TerrainParkProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
    >
      <rect fill={COLORS[color]} width={44} height={20} x={4} y={14} rx={4} />
    </svg>
  );
};

export default TerrainPark;
