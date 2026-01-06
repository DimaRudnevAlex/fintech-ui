import { useId } from 'react';

import { clsx } from 'clsx';

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
        />
        <SelectContent options={options}>
          <SelectItems options={options} />
        </SelectContent>
      </SelectRoot>
    </div>
  );
};

export default Select;
