import { type Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mortgage Calculator',
  description: 'This calculator helps you work out how much your mortgage repayments will be.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={process.env.THEME}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}