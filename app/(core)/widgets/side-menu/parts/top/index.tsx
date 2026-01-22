import Link from 'next/link';

import { motion } from 'framer-motion';

import Logo from '@/(shared)/components/logo';
import Heading from '@/(shared)/components/typography/heading';

import styles from './styles.module.scss';

const AsideTop: React.FC = () => (
  <motion.div
    initial={{
      opacity: 0,
      x: -6,
    }}
    animate={{
      opacity: 1,
      x: 0,
    }}
    transition={{
      duration: 0.2,
      ease: 'easeOut',
    }}
  >
    <Link className={styles.top} href="/">
      <Logo />
      <Heading variant="h1" className={styles.title}>
        {'Arckat'}
      </Heading>
    </Link>
  </motion.div>
);

export default AsideTop;
