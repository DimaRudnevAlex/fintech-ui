'use client';

import { useId } from 'react';

import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

import { TextFieldProps } from './model/types';

import styles from './styles.module.scss';

const TextField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  className,
  errors = [],
  id,
}) => {
  const idInput = useId();
  const hasError = errors.length > 0;

  return (
    <div
      className={clsx(styles.wrapper, hasError && styles.hasError, className)}
    >
      {label && (
        <label htmlFor={id ?? idInput} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputWrapper}>
        <input
          id={id ?? idInput}
          type="text"
          className={styles.input}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          value={value}
        />
        <AnimatePresence>
          {value && (
            <motion.button
              type="button"
              className={styles.clearButton}
              onClick={() => onChange('')}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <X size={16} strokeWidth={3} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className={styles.errorWrapper}>
        <AnimatePresence>
          {errors.map((error) => (
            <motion.div
              layout
              key={error}
              className={styles.error}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {error}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TextField;
