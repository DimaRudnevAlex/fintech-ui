import * as RadixSelect from '@radix-ui/react-select';
import { clsx } from 'clsx';
import { ChevronDown } from 'lucide-react';

import { SelectTriggerProps } from './model/types';

import styles from './styles.module.scss';

const SelectTrigger: React.FC<SelectTriggerProps> = ({
  placeholder = 'Выберите значение',
  isLoading,
  id,
  hasError,
}) => {
  return (
    <RadixSelect.Trigger
      className={clsx(styles.trigger, hasError && styles.hasError)}
      id={id}
    >
      <RadixSelect.Value placeholder={placeholder} />
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
          <ChevronDown size={16} />
        </RadixSelect.Icon>
      </div>
    </RadixSelect.Trigger>
  );
};

export default SelectTrigger;
