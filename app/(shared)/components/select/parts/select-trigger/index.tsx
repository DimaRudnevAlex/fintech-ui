import * as RadixSelect from '@radix-ui/react-select';
import { clsx } from 'clsx';
import { ChevronDown } from 'lucide-react';

import { SelectOption } from '../../model/types';

import { SelectTriggerProps } from './model/types';

import styles from './styles.module.scss';

const SelectTrigger = <TOption extends SelectOption = SelectOption<unknown>>({
  placeholder,
  isLoading,
  id,
  hasError,
  renderValue,
  value,
  onBlur,
}: SelectTriggerProps<TOption>) => {
  return (
    <RadixSelect.Trigger
      onBlur={onBlur}
      className={clsx(styles.trigger, hasError && styles.hasError)}
      id={id}
    >
      <RadixSelect.Value placeholder={placeholder}>
        {value && renderValue?.(value)}
      </RadixSelect.Value>
      <div className={styles.right}>
        <div className={styles.loaderWrapper}>
          {isLoading && (
            <div className={styles.dotLoader}>
              <span />
              <span />
              <span />
            </div>
          )}
        </div>
        <RadixSelect.Icon className={styles.icon}>
          <ChevronDown size={20} />
        </RadixSelect.Icon>
      </div>
    </RadixSelect.Trigger>
  );
};

export default SelectTrigger;
