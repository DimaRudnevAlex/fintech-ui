'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { Checkmark } from './parts/checkmark';

import styles from './styles.module.scss';

export function SuccessConfirmation({
  open,
  title,
  subtitle,
  onClose,
}: {
  open: boolean;
  title?: string;
  subtitle?: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.card}
            initial={{ y: -40, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: -20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Checkmark />

            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}>{subtitle}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
