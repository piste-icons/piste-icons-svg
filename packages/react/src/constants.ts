export const COLORS = {
  black: '#000000',
  blue: '#006699',
  green: '#339933',
  orange: '#ff9900',
  red: '#ed1c24',
  yellow: '#ffd502',
} as const;

export type Color = keyof typeof COLORS;

export type ColorExtract<U extends Color> = Extract<Color, U>;
