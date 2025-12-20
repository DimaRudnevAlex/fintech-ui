'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { clsx } from 'clsx';
import { motion } from 'framer-motion';

import { SublistItemProps } from './model/types';

import styles from './styles.module.scss';

const SublistItem: React.FC<SublistItemProps> = ({ label, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <motion.li
      className={clsx(styles.item, isActive && styles.active)}
      initial={{ opacity: 0, x: -4 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {isActive && (
        <motion.span
          layoutId="active-sublist-indicator"
          className={styles.indicator}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}

      <Link href={href} className={styles.link}>
        {label}
      </Link>
    </motion.li>
  );
};

export default SublistItem;
