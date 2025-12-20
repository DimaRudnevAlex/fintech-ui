'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import { AsideSingleItemProps } from './model/types';

import styles from './styles.module.scss';

const AsideSingleItem: React.FC<AsideSingleItemProps> = ({
  label,
  href,
  Icon,
  extended,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className={styles.root}>
      <Link
        href={href}
        className={clsx(styles.item, isActive && styles.active)}
      >
        {isActive && (
          <motion.span
            layoutId="aside-active-indicator"
            className="verticalIndicator"
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}

        {Icon && <div className={styles.icon}>{Icon}</div>}

        <AnimatePresence initial={false}>
          {extended && (
            <motion.div
              className={styles.text}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {label}
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
    </li>
  );
};

export default AsideSingleItem;
