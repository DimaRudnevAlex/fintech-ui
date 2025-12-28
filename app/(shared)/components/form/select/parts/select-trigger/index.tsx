import * as RadixSelect from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';

import { SelectTriggerProps } from './model/types';

import styles from './styles.module.scss';

const SelectTrigger: React.FC<SelectTriggerProps> = ({
  placeholder = 'Выберите значение',
  isLoading,
  id,
}) => {
  return (
    <RadixSelect.Trigger className={styles.trigger} id={id}>
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
