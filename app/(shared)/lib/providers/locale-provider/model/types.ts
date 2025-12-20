import { ReactNode } from 'react';

import { Locale } from '@/(shared)/types/general';

export type LocaleContextProps = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

export type LocaleProviderProps = {
  children: ReactNode;
  localeServer: Locale;
  timeZoneServer: string;
};
