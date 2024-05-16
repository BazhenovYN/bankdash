import localFont from 'next/font/local';

export const fontLato = localFont({
  src: [
    {
      path: './fonts/Lato-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Lato-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-lato',
});
