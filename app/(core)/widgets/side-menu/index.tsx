'use client';

import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

import { clsx } from 'clsx';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { HandCoins, User, WalletCards } from 'lucide-react';

import { ROUTES } from '@/(shared)/constants/routes';

import { HEADER_TITLES } from '@/(core)/widgets/header/model/config';
import LanguageSwitcher from '@/(core)/widgets/language-switcher';

import AsideNestedItem from './parts/nested-item';
import AsideSingleItem from './parts/single-item';
import SublistItem from './parts/sublist-item';
import AsideTop from './parts/top';

import styles from './styles.module.scss';

const asideVariants: Variants = {
  collapsed: {
    width: 68,
  },
  expanded: {
    width: 285,
  },
};

const SideMenu: React.FC = () => {
  const [extended, setExtended] = useState<boolean>(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const t = useTranslations('sideBar');

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setExtended(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setExtended(false);
    }, 80);
  };

  return (
    <motion.aside
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={asideVariants}
      animate={extended ? 'expanded' : 'collapsed'}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 28,
      }}
      className={clsx(styles.aside, extended && styles.expanded)}
    >
      <AsideTop extended={extended} />

      <ul className={styles.menu}>
        <AsideSingleItem
          label={t(HEADER_TITLES[ROUTES.PROFILE])}
          href={ROUTES.PROFILE}
          Icon={<User />}
          extended={extended}
        />
        <AsideNestedItem
          label={t('transfers')}
          Icon={<HandCoins />}
          extended={extended}
        >
          <SublistItem
            label={t(HEADER_TITLES[ROUTES.TRANSFER_FIAT])}
            href={ROUTES.TRANSFER_FIAT}
            extended={extended}
          />
          <SublistItem
            label={t(HEADER_TITLES[ROUTES.TRANSFER_CRYPT])}
            href={ROUTES.TRANSFER_CRYPT}
            extended={extended}
          />
          <SublistItem
            label={t(HEADER_TITLES[ROUTES.HISTORY])}
            href={ROUTES.HISTORY}
            extended={extended}
          />
        </AsideNestedItem>
        <AsideNestedItem
          label={t(HEADER_TITLES[ROUTES.ACCOUNTS])}
          Icon={<WalletCards />}
          extended={extended}
        >
          <SublistItem
            label={t(HEADER_TITLES[ROUTES.ACCOUNTS])}
            href={ROUTES.ACCOUNTS}
            extended={extended}
          />
        </AsideNestedItem>
      </ul>
      <div className={styles.languageWrapper}>
        <AnimatePresence>
          {extended && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              <LanguageSwitcher />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.aside>
  );
};

export default SideMenu;
