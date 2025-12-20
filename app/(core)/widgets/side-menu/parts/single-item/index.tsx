import Link from 'next/link';

import { AnimatePresence, motion } from 'framer-motion';

import { AsideSingleItemProps } from './model/types';

import styles from './styles.module.scss';

const AsideSingleItem: React.FC<AsideSingleItemProps> = ({
  label,
  href,
  Icon,
  extended,
}) => (
  <li>
    <Link href={href} className={styles.item}>
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

export default AsideSingleItem;
