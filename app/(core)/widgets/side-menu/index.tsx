'use client';

import { useState } from 'react';

import { clsx } from 'clsx';
import { HandCoins, User, WalletCards } from 'lucide-react';

import { ROUTES } from '@/(shared)/constants/routes';

import AsideNestedItem from './parts/nested-item';
import SublistItem from './parts/sublist-item';
import AsideTop from './parts/top';

import styles from './styles.module.scss';

const SideMenu: React.FC = () => {
  const [extended, setExtended] = useState<boolean>(false);
  return (
    <aside
      onMouseEnter={() => setExtended(true)}
      onMouseLeave={() => setExtended(false)}
      className={clsx(styles.aside, extended && 'extended')}
    >
      <AsideTop />

      <ul className={styles.menu}>
        <AsideNestedItem label={'Profile'} Icon={<User />}>
          <SublistItem label={'Me'} href={ROUTES.PROFILE} />
        </AsideNestedItem>
        <AsideNestedItem label={'Transfers'} Icon={<HandCoins />}>
          <SublistItem label={'Transfer fiat'} href={ROUTES.TRANSFERS} />
        </AsideNestedItem>
        <AsideNestedItem label={'Accounts'} Icon={<WalletCards />}>
          <SublistItem label={'Accounts fiat'} href={ROUTES.ACCOUNTS} />
        </AsideNestedItem>
      </ul>
    </aside>
  );
};

export default SideMenu;
