'use client';

import { createContext, useContext, useState } from 'react';
import { NextIntlClientProvider } from 'next-intl';

import enMessages from '@/(shared)/lib/i18n/locales/en.json';
import ruMessages from '@/(shared)/lib/i18n/locales/ru.json';
import { Locale } from '@/(shared)/types/general';

import { LocaleContextProps, LocaleProviderProps } from './model/types';

const messagesMap = { en: enMessages, ru: ruMessages };

const LocaleContext = createContext<LocaleContextProps | null>(null);

export const LocaleProvider: React.FC<LocaleProviderProps> = ({
  children,
  localeServer,
  timeZoneServer,
}) => {
  const [locale, setLocale] = useState<Locale>(localeServer);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider
        messages={messagesMap[locale]}
        locale={locale}
        timeZone={timeZoneServer}
      >
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
};

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }

  return context;
}
