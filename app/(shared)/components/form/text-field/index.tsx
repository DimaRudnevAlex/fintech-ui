'use client';

import { useId } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

import { TextFieldProps } from './model/types';

import styles from './styles.module.scss';

const TextField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
}) => {
  const id = useId();

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputWrapper}>
        <input
          id={id}
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
            >
              <X size={16} strokeWidth={3} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TextField;
