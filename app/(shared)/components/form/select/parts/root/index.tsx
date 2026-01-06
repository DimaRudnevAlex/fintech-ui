'use client';

import * as RadixSelect from '@radix-ui/react-select';

import { SelectOption } from '@/(shared)/components/form/select/model/types';

import { SelectRootProps } from './model/types';

const SelectRoot = <TOption extends SelectOption>({
  value,
  options,
  onChange,
  children,
}: SelectRootProps<TOption>) => {
  return (
    <RadixSelect.Root
      value={value?.value ?? ''}
      onValueChange={(val) => {
        const option = options.find((o) => o.value === val);
        if (option) {
          onChange?.(option);
        }
      }}
    >
      {children}
    </RadixSelect.Root>
  );
};

export default SelectRoot;
