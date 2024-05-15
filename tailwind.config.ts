import type { Config } from 'tailwindcss';

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
        400: '#E6EFF5',
        600: '#2D60FF',
      },
      gray: {
        400: '#B1B1B1',
      },
    },
  },
};
export default config;
