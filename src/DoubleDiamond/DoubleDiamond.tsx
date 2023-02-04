import { ColorExtract, COLORS } from '../constants';

export interface DoubleDiamondProps {
  color?: ColorExtract<'black'>;
  size?: number;
}

const DoubleDiamond = ({
  color = 'black',
  size = 24,
}: DoubleDiamondProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path
        fill={COLORS[color]}
        d="m7 2 5 10-5 10-5-10zm10 0 5 10-5 10-5-10z"
      />
    </svg>
  );
};

export default DoubleDiamond;
