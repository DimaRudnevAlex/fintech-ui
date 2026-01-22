import { Children, ReactElement, useState } from 'react';
import { usePathname } from 'next/navigation';

import { clsx } from 'clsx';
import { motion, Variants } from 'framer-motion';

import { AsideNestedItemProps } from './model/types';

import styles from './styles.module.scss';

const childListVariants: Variants = {
  open: {
    opacity: 1,
    height: 'auto',
    transition: { staggerChildren: 0.1, when: 'beforeChildren' },
  },
  collapsed: {
    opacity: 0,
    height: 0,
    transition: { staggerChildren: 0.1, when: 'afterChildren' },
  },
};

const AsideNestedItem: React.FC<AsideNestedItemProps> = ({
  label,
  Icon,
  children,
}) => {
  const pathname = usePathname();

  const hasActiveChild = Children.toArray(children).some((child) => {
    const element = child as ReactElement<{ href?: string }>;
    return element.props?.href === pathname;
  });

  const [open, setOpen] = useState<boolean>(hasActiveChild);

  return (
    <li className={styles.root}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={clsx(styles.item, hasActiveChild && styles.active)}
      >
        {hasActiveChild && (
          <motion.span
            layoutId="aside-active-indicator"
            className="verticalIndicator"
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}

        {Icon && <div className={styles.icon}>{Icon}</div>}

        <span className={styles.text}>{label}</span>

        <motion.span
          className={styles.arrow}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
        />
      </button>

      <motion.ul
        variants={childListVariants}
        initial="collapsed"
        animate={open ? 'open' : 'collapsed'}
      >
        {children}
      </motion.ul>
    </li>
  );
};

export default AsideNestedItem;
