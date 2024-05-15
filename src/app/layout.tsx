import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import clsx from 'clsx';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BankDash',
  description: 'Bank dashboard app',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'flex min-h-screen')}>{children}</body>
    </html>
  );
}
