'use client';

import Link from 'next/link';

import { clsx } from 'clsx';
import { motion } from 'framer-motion';

import { BaseLinkProps } from './model/types';

import styles from './styles.module.scss';

const BaseLink: React.FC<BaseLinkProps> = ({
  children,
  size = 'md',
  color = 'primary',
  variant = 'default',
  fullWidth = false,
  iconLeft,
  iconRight,
  className,
  ...props
}) => {
  return (
    <Link {...props}>
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
      >
        <span className={styles.content}>
          {iconLeft && <span className={styles['icon-left']}>{iconLeft}</span>}
          {children}
          {iconRight && (
            <span className={styles['icon-right']}>{iconRight}</span>
          )}
        </span>
      </motion.button>
    </Link>
  );
};

export default BaseLink;
