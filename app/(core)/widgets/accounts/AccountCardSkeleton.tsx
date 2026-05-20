'use client';

import { motion } from 'framer-motion';

import styles from './styles.module.scss';

const AccountCardSkeleton: React.FC = () => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      aria-busy="true"
      aria-label="Загрузка карточки счёта"
    >
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          {/* title: "SAVINGS · USD" */}
          <span className={`${styles.skeletonLine} ${styles.skeletonTitle}`} />
          {/* badge placeholder — same height as real badge to keep layout stable */}
          <span className={`${styles.skeletonLine} ${styles.skeletonBadge}`} />
        </div>

        <div className={styles.statusGroup}>
          {/* status dot */}
          <span className={`${styles.skeletonDot}`} />
          {/* account number */}
          <span className={`${styles.skeletonLine} ${styles.skeletonNumber}`} />
        </div>
      </div>

      {/* Balance */}
      <span className={`${styles.skeletonLine} ${styles.skeletonBalance}`} />

      {/* Stats */}
      <div className={styles.stats}>
        <div className={styles.income}>
          <span
            className={`${styles.skeletonLine} ${styles.skeletonStatLabel}`}
          />
          <span
            className={`${styles.skeletonLine} ${styles.skeletonStatValue}`}
          />
        </div>
        <div className={styles.expense}>
          <span
            className={`${styles.skeletonLine} ${styles.skeletonStatLabel}`}
          />
          <span
            className={`${styles.skeletonLine} ${styles.skeletonStatValue}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AccountCardSkeleton;
