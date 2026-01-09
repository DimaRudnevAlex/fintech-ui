import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value || 'ru';
  console.log('locale', locale);
  const timeZone = 'Europe/Moscow';

  return {
    timeZone,
    locale,
    messages: (await import(`@/(shared)/lib/i18n/locales/${locale}.json`))
      .default,
  };
});
