import { JSX } from 'react';
import { Montserrat } from 'next/font/google';
import { getLocale, getTimeZone } from 'next-intl/server';

import { LocaleProvider } from '@/(shared)/lib/providers/locale-provider';
import { Locale } from '@/(shared)/types/general';

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
  const locale = await getLocale();
  const timeZone = await getTimeZone();

  return (
    <html lang={locale} className={montserrat.variable}>
      <body>
        <LocaleProvider
          localeServer={locale as Locale}
          timeZoneServer={timeZone}
        >
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
};

export default RootLayout;
