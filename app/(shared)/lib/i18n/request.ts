import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const locale = 'ru';
  const timeZone = 'Europe/Moscow';

  return {
    timeZone,
    locale,
    messages: (await import(`@/(shared)/lib/i18n/locales/${locale}.json`))
      .default,
  };
});
