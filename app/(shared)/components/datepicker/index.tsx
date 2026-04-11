'use client';

import * as React from 'react';

import { clsx } from 'clsx';
import { add, format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar as CalendarIcon } from 'lucide-react';

import { DateTimePickerProps } from '@/(shared)/components/datepicker/model/types';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/(shared)/components/popover';
import { Calendar } from '@/(shared)/components/сalendar';

import styles from './styles.module.scss';

export function DateTimePicker({
  errors = [],
  className,
  label,
  value,
  onChange,
  ...props
}: DateTimePickerProps) {
  const handleSelect = (newDay: Date | undefined) => {
    if (!newDay) return;
    if (!value) {
      onChange(newDay);
      return;
    }
    const diff = newDay.getTime() - value.getTime();
    const diffInDays = diff / (1000 * 60 * 60 * 24);
    const newDateFull = add(value, { days: Math.ceil(diffInDays) });
    onChange(newDateFull);
  };
  const hasError = errors.length > 0;

  return (
    <div
      className={clsx(styles.wrapper, hasError && styles.hasError, className)}
    >
      {label && <label className={styles.label}>{label}</label>}
      <Popover>
        <PopoverTrigger asChild>
          <div
            className={`${styles.trigger}${!value ? ` ${styles.triggerEmpty}` : ''}`}
          >
            <CalendarIcon className={styles.icon} />
            {value ? (
              format(value, 'PPP', { locale: ru })
            ) : (
              <span>Выберите дату</span>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className={styles.popoverContent}>
          <Calendar
            {...props}
            mode="single"
            selected={value as Date}
            onSelect={(d) => handleSelect(d)}
          />
        </PopoverContent>
      </Popover>

      <div className={styles.errorWrapper}>
        <AnimatePresence>
          {errors?.map((error) => (
            <motion.div
              layout
              key={error}
              className={styles.error}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {error}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
