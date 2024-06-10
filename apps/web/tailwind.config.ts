import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    screens: {
      sm: '375px',
      md: '1024px',
      lg: '1440px',
    },
    colors: {
      blue: {
        200: '#F5F7FA',
        300: '#D9E9FF',
        400: '#E6EFF5',
        600: '#2D60FF',
        800: '#1814F3',
        900: '#343C6A',
      },
      gray: {
        200: '#DFEAF2',
        300: '#EBEEF2',
        400: '#B1B1B1',
        500: '#8BA3CB',
        600: '#718EBF',
        900: '#232323',
      },
      green: {
        500: '#41D4A8',
      },
      red: {
        400: '#FE5C73',
        500: '#FF4B4A',
      },
      transparent: colors.transparent,
      white: colors.white,
      black: colors.black,
    },
    fontSize: {
      ...defaultTheme.fontSize,
      '2xl': ['1.5625rem', '1.875rem'],
      '3xl': ['1.75rem', '2.125'],
    },
    extend: {
      fontSize: {
        s: ['0.625rem', '0.75rem'],
      },
      borderRadius: {
        '5xl': '2.5rem',
      },
      invert: {
        70: '.70',
      },
    },
  },
};
export default config;
