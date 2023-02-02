import { Color, COLORS } from '../constants';

export interface DiamondProps {
  color?: Extract<Color, 'black' | 'red'>;
  size?: number;
}

const Diamond = ({ color = 'black', size = 24 }: DiamondProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path fill={COLORS[color]} d="m12 2 10 10-10 10L2 12z" />
    </svg>
  );
};

export default Diamond;
