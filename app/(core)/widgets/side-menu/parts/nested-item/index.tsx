import { useState } from 'react';

import { AnimatePresence, motion, Variants } from 'framer-motion';

import { AsideNestedItemProps } from './model/types';

import styles from './styles.module.scss';

const childListVariants: Variants = {
  open: {
    opacity: 1,
    height: 'auto',
    transition: { staggerChildren: 0.06, when: 'beforeChildren' },
  },
  collapsed: {
    opacity: 0,
    height: 0,
    transition: { staggerChildren: 0.05, when: 'afterChildren' },
  },
};

const AsideNestedItem: React.FC<AsideNestedItemProps> = ({
  label,
  Icon,
  children,
  extended,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <li className={styles.root}>
      <button onClick={() => setOpen((v) => !v)} className={styles.item}>
        {Icon && <div className={styles.icon}>{Icon}</div>}

        <AnimatePresence initial={false}>
          {extended && (
            <motion.span
              className={styles.text}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>

        <motion.span
          className={styles.arrow}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            rotate: open ? 180 : 0,
            opacity: extended ? 1 : 0,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />
      </button>

      <motion.ul
        className={styles.sublist}
        variants={childListVariants}
        initial="collapsed"
        animate={open && extended ? 'open' : 'collapsed'}
      >
        {children}
      </motion.ul>
    </li>
  );
};

export default AsideNestedItem;
