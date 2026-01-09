import { clsx } from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import { LoaderCircle } from 'lucide-react';

import { IconButtonProps } from './model/types';

import styles from './styles.module.scss';

const IconButton: React.FC<IconButtonProps & HTMLMotionProps<'button'>> = ({
  icon,
  onClick,
  type = 'button',
  className,
  color = 'accent',
  loading = false,
  ...rest
}) => (
  <motion.button
    whileTap={{ scale: 0.95 }}
    type={type}
    className={clsx(
      styles['icon-button'],
      styles[`color-${color}`],
      loading && styles.loading,
      className,
    )}
    onClick={onClick}
    disabled={loading}
    {...rest}
  >
    <span className={clsx(styles['icon-wrapper'], loading && styles.hidden)}>
      {icon}
    </span>

    {loading && (
      <span className={styles['loader-wrapper']}>
        <LoaderCircle className={styles.loader} />
      </span>
    )}
  </motion.button>
);
export default IconButton;
