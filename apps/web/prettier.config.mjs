/** @type {import('prettier').Config} **/
import prettierConfig from '@bankdash/prettier-config';

const config = {
  ...prettierConfig,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
