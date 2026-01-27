'use client';

import { clsx } from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import { Loader } from 'lucide-react';

import { ButtonProps } from './model/types';

import styles from './styles.module.scss';

export const BaseButton: React.FC<ButtonProps & HTMLMotionProps<'button'>> = ({
  children,
  isLoading = false,
  size = 'md',
  color = 'primary',
  variant = 'default',
  fullWidth = false,
  iconLeft,
  iconRight,
  disabled,
  className,
  ...props
}) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={clsx(
        styles.button,
        styles[size],
        styles[color],
        variant !== 'default' && styles[variant],
        fullWidth && styles.fullWidth,
        className,
      )}
      disabled={disabled || isLoading}
      type="button"
      {...props}
    >
      <span className={clsx(styles.content, isLoading && styles.loading)}>
        {iconLeft && <span className={styles['icon-left']}>{iconLeft}</span>}
        {children}
        {iconRight && <span className={styles['icon-right']}>{iconRight}</span>}
      </span>

      {isLoading && (
        <motion.span
          className={styles.spinner}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Loader />
        </motion.span>
      )}
    </motion.button>
  );
};

export default BaseButton;
