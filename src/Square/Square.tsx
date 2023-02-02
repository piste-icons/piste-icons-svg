import { ColorExtract, COLORS } from '../constants';

export interface SquareProps {
  color?: ColorExtract<'blue' | 'orange'>;
  size?: number;
}

const Square = ({ color = 'blue', size = 24 }: SquareProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path fill={COLORS[color]} d="M2 2h20v20H2z" />
    </svg>
  );
};

export default Square;
