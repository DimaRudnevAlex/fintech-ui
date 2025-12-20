'use client';

import { usePathname } from 'next/navigation';

import { AnimatePresence, motion } from 'framer-motion';

import Heading from '@/(shared)/components/typography/heading';

import { HEADER_TITLES } from '@/(core)/widgets/header/model/config';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  const pathname = usePathname();
  const title = HEADER_TITLES[pathname] || 'Fintech';

  return (
    <header className={styles.wrapper}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <Heading variant="h1">{title}</Heading>
        </motion.div>
      </AnimatePresence>
    </header>
  );
};

export default Header;
