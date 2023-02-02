import { Color, COLORS } from '../constants';

export interface CircleProps {
  color?: Extract<Color, 'black' | 'blue' | 'green' | 'orange' | 'red'>;
  size?: number;
}

const Circle = ({ color = 'green', size = 24 }: CircleProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <circle fill={COLORS[color]} cx="12" cy="12" r="10" />
    </svg>
  );
};

export default Circle;
