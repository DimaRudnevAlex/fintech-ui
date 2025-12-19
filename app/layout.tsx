import { JSX } from 'react';
import { Montserrat } from 'next/font/google';

import '@/(shared)/styles/globals.css';
import '@/(shared)/styles/variables.css';

const montserrat = Montserrat({
  subsets: ['cyrillic'],
  style: ['normal'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<JSX.Element> => {
  return (
    <html className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
