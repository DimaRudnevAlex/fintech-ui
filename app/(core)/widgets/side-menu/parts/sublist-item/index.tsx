'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { clsx } from 'clsx';
import { motion } from 'framer-motion';

import { SublistItemProps } from './model/types';

import styles from './styles.module.scss';

const SublistItem: React.FC<SublistItemProps> = ({ label, href, extended }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <motion.li
      layout="position"
      className={clsx(styles.item, isActive && styles.active)}
      initial={false}
      animate={{
        opacity: extended ? 1 : 0,
        x: extended ? 0 : -4,
      }}
      transition={{
        duration: extended ? 0.15 : 0.05,
        ease: 'easeOut',
      }}
    >
      {isActive && (
        <motion.span
          layoutId="active-sublist-dot"
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
