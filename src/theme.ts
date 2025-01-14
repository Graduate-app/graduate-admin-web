
const colors = {
  blue: '#3f88e6',
  gray: '#7a7a7a',
  red: '#ff0000',
  accent: '#253b80',
  light: {
    gray: '#E5E7EB', 
    grayBg: '#F3F4F6',
    background: '#FFFFFF',
    hover: '#F9FAFB'
  },
  dark: {
    primary: '#111827', 
    secondary: '#4B5563'
  }
};

const font = {
  family: {
    montserrat: '"Montserrat", sans-serif',
  },
};

export type TColors = keyof typeof colors;

const theme = {
  colors,
  font,
};

export default theme;

export type ThemeType = typeof theme;
