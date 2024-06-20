/** @type {import('prettier').Config} **/
import prettierConfig from '@bankdash/prettier-config';

export default {
  ...prettierConfig,
  plugins: ['prettier-plugin-tailwindcss'],
};
