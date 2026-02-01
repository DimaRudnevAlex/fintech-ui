import { useId } from 'react';

import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import {
  SelectOption,
  SelectProps,
} from '@/(shared)/components/select/model/types';
import SelectRoot from '@/(shared)/components/select/parts/root';
import SelectContent from '@/(shared)/components/select/parts/select-content';
import SelectItems from '@/(shared)/components/select/parts/select-item';
import SelectLabel from '@/(shared)/components/select/parts/select-label';
import SelectTrigger from '@/(shared)/components/select/parts/select-trigger';

import styles from './styles.module.scss';

const Select = <TOption extends SelectOption>({
  options,
  isLoading,
  onChange,
  placeholder,
  value,
  label,
  className,
  errors = [],
  onBlur,
  renderOption,
  renderValue,
}: SelectProps<TOption>) => {
  const id = useId();

  return (
    <div className={clsx(styles.wrapper, className)}>
      <SelectLabel id={id} label={label} />
      <SelectRoot value={value} onChange={onChange} options={options}>
        <SelectTrigger
          onBlur={onBlur}
          isLoading={isLoading}
          placeholder={placeholder}
          id={id}
          hasError={errors.length > 0}
          renderValue={renderValue}
          value={value}
        />
        <SelectContent options={options}>
          <SelectItems options={options} renderOption={renderOption} />
        </SelectContent>
      </SelectRoot>

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

export default Select;
