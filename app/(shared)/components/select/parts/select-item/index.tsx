import * as RadixSelect from '@radix-ui/react-select';
import { Check } from 'lucide-react';

import { SelectItemsProps } from './model/types';

import styles from './styles.module.scss';

const SelectItems: React.FC<SelectItemsProps> = ({ options }) => {
  return (
    <>
      {options.map((option) => (
        <RadixSelect.Item
          key={option.value}
          value={option.value}
          className={styles.item}
        >
          <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>

          <RadixSelect.ItemIndicator className={styles.indicator}>
            <Check size={14} />
          </RadixSelect.ItemIndicator>
        </RadixSelect.Item>
      ))}
    </>
  );
};

export default SelectItems;
