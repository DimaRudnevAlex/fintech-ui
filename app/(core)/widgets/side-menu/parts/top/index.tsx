import Link from 'next/link';

import { AnimatePresence, motion } from 'framer-motion';

import Logo from '@/(shared)/components/logo';
import Heading from '@/(shared)/components/typography/heading';

import { AsideTopProps } from './model/types';

import styles from './styles.module.scss';

const AsideTop: React.FC<AsideTopProps> = ({ extended }) => (
  <Link className={styles.top} href="/">
    <Logo className={styles.icon} />
    <AnimatePresence initial={false}>
      {extended && (
        <motion.div
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -6 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className={styles.title}
        >
          <Heading variant="h1">Fintech</Heading>
        </motion.div>
      )}
    </AnimatePresence>
  </Link>
);

export default AsideTop;
