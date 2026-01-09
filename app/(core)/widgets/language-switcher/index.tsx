'use client';

import { useRouter } from 'next/navigation';

import { clsx } from 'clsx';
import { motion } from 'framer-motion';

import { useLocale } from '@/(shared)/lib/providers/locale-provider';

import styles from './styles.module.scss';

const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useLocale();
  const router = useRouter();

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'ru' : 'en';
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
    setLocale(newLocale);
    router.refresh();
  };

  return (
    <div className={styles.switcher} onClick={toggleLocale}>
      <motion.div
        className={styles.switcher__background}
        animate={{ x: locale === 'en' ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />

      <motion.div
        className={clsx(
          styles.switcher__option,
          locale === 'en' && styles.active,
        )}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {'EN'}
      </motion.div>

      <motion.div
        className={clsx(
          styles.switcher__option,
          locale === 'ru' && styles.active,
        )}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {'RU'}
      </motion.div>
    </div>
  );
};

export default LanguageSwitcher;
