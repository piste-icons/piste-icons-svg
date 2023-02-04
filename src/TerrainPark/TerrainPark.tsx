import { ColorExtract, COLORS } from '../constants';

export interface TerrainParkProps {
  color?: ColorExtract<'orange'>;
  size?: number;
}

const TerrainPark = ({
  color = 'orange',
  size = 24,
}: TerrainParkProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <rect fill={COLORS[color]} width="20" height="10" x="2" y="7" rx="5" />
    </svg>
  );
};

export default TerrainPark;
