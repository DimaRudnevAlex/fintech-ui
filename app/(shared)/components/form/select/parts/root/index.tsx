'use client';

import * as RadixSelect from '@radix-ui/react-select';

import { SelectRootProps } from './model/types';

const SelectRoot: React.FC<SelectRootProps> = ({
  value,
  options,
  onChange,
  children,
}) => {
  return (
    <RadixSelect.Root
      value={value?.value ?? ''}
      onValueChange={(val) => {
        const option = options.find((o) => o.value === val);
        if (option) onChange?.(option);
      }}
    >
      {children}
    </RadixSelect.Root>
  );
};

export default SelectRoot;
