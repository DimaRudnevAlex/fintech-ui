'use client';

import { useTranslations } from 'next-intl';

import { HandCoins, User, WalletCards } from 'lucide-react';

import Line from '@/(shared)/components/visual/line';
import { ROUTES } from '@/(shared)/constants/routes';

import { HEADER_TITLES } from '@/(core)/widgets/header/model/config';
import LanguageSwitcher from '@/(core)/widgets/language-switcher';

import AsideNestedItem from './parts/nested-item';
import AsideSingleItem from './parts/single-item';
import SublistItem from './parts/sublist-item';
import AsideTop from './parts/top';

import styles from './styles.module.scss';

const SideMenu: React.FC = () => {
  const t = useTranslations('sideBar');

  return (
    <aside className={styles.aside}>
      <AsideTop />
      <Line />
      <ul className={styles.menu}>
        <AsideSingleItem
          label={t(HEADER_TITLES[ROUTES.PROFILE])}
          href={ROUTES.PROFILE}
          Icon={<User />}
        />
        <AsideNestedItem label={t('transfers')} Icon={<HandCoins />}>
          <SublistItem
            label={t(HEADER_TITLES[ROUTES.TRANSFER_FIAT])}
            href={ROUTES.TRANSFER_FIAT}
          />
          <SublistItem
            label={t(HEADER_TITLES[ROUTES.TRANSFER_CRYPT])}
            href={ROUTES.TRANSFER_CRYPT}
          />
          <SublistItem
            label={t(HEADER_TITLES[ROUTES.HISTORY])}
            href={ROUTES.HISTORY}
          />
        </AsideNestedItem>
        <AsideNestedItem
          label={t(HEADER_TITLES[ROUTES.ACCOUNTS])}
          Icon={<WalletCards />}
        >
          <SublistItem
            label={t(HEADER_TITLES[ROUTES.ACCOUNTS])}
            href={ROUTES.ACCOUNTS}
          />
        </AsideNestedItem>
      </ul>

      <div className={styles.languageWrapper}>
        <LanguageSwitcher />
      </div>
    </aside>
  );
};

export default SideMenu;
