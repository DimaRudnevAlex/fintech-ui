import { useId } from 'react';

import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import {
  SelectOption,
  SelectProps,
} from '@/(shared)/components/form/select/model/types';
import SelectRoot from '@/(shared)/components/form/select/parts/root';
import SelectContent from '@/(shared)/components/form/select/parts/select-content';
import SelectItems from '@/(shared)/components/form/select/parts/select-item';
import SelectLabel from '@/(shared)/components/form/select/parts/select-label';
import SelectTrigger from '@/(shared)/components/form/select/parts/select-trigger';

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
}: SelectProps<TOption>) => {
  const id = useId();

  return (
    <div className={clsx(styles.wrapper, className)}>
      <SelectLabel id={id} label={label} />
      <SelectRoot value={value} onChange={onChange} options={options}>
        <SelectTrigger
          isLoading={isLoading}
          placeholder={placeholder}
          id={id}
          hasError={errors.length > 0}
        />
        <SelectContent options={options}>
          <SelectItems options={options} />
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
