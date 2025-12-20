'use client';

import { useRef, useState } from 'react';

import { clsx } from 'clsx';
import { motion, Variants } from 'framer-motion';
import { HandCoins, User, WalletCards } from 'lucide-react';

import { ROUTES } from '@/(shared)/constants/routes';

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
      className={clsx(styles.aside)}
    >
      <AsideTop extended={extended} />

      <ul className={styles.menu}>
        <AsideSingleItem
          label="Profile"
          href={ROUTES.PROFILE}
          Icon={<User />}
          extended={extended}
        />
        <AsideNestedItem
          label={'Transfers'}
          Icon={<HandCoins />}
          extended={extended}
        >
          <SublistItem
            label={'Transfer fiat'}
            href={ROUTES.TRANSFERS_FIAT}
            extended={extended}
          />
          <SublistItem
            label={'Transfer Crypt'}
            href={ROUTES.TRANSFERS_CRYPT}
            extended={extended}
          />
        </AsideNestedItem>
        <AsideNestedItem
          label={'Accounts'}
          Icon={<WalletCards />}
          extended={extended}
        >
          <SublistItem
            label={'Accounts fiat'}
            href={ROUTES.ACCOUNTS}
            extended={extended}
          />
        </AsideNestedItem>
      </ul>
    </motion.aside>
  );
};

export default SideMenu;
