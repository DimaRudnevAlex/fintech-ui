import * as RadixSelect from '@radix-ui/react-select';
import { Check } from 'lucide-react';

import { SelectOption } from '../../model/types';

import { SelectItemsProps } from './model/types';

import styles from './styles.module.scss';

const SelectItems = <TOption extends SelectOption>({
  options,
  renderOption,
}: SelectItemsProps<TOption>) => {
  return (
    <>
      {options.map((option) => (
        <RadixSelect.Item
          key={option.value}
          value={option.value}
          className={styles.item}
        >
          <RadixSelect.ItemText asChild>
            <div>{renderOption ? renderOption(option) : option.label}</div>
          </RadixSelect.ItemText>

          <RadixSelect.ItemIndicator className={styles.indicator}>
            <Check size={14} />
          </RadixSelect.ItemIndicator>
        </RadixSelect.Item>
      ))}
    </>
  );
};

export default SelectItems;
