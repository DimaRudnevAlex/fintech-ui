import Link from 'next/link';

import { motion } from 'framer-motion';

import Logo from '@/(shared)/components/logo';
import Heading from '@/(shared)/components/typography/heading';

import { AsideTopProps } from './model/types';

import styles from './styles.module.scss';

const AsideTop: React.FC<AsideTopProps> = ({ extended }) => (
  <Link className={styles.top} href="/">
    <Logo className={styles.icon} />

    <motion.div
      className={styles.title}
      initial={false}
      animate={{
        opacity: extended ? 1 : 0,
        x: extended ? 0 : -6,
      }}
      transition={{
        duration: extended ? 0.15 : 0.05,
        ease: 'easeOut',
      }}
    >
      <Heading variant="h1">Fintech</Heading>
    </motion.div>
  </Link>
);

export default AsideTop;
