'use client';

import { useState } from 'react';

import Select from '@/(shared)/components/form/select';
import { SelectOption } from '@/(shared)/components/form/select/model/types';

const options: SelectOption<{ icon?: string }>[] = [
  { label: 'USD', value: 'usd', meta: { icon: '$' } },
  { label: 'EUR', value: 'eur', meta: { icon: '€' } },
];

const Page: React.FC = () => {
  const [value, setValue] = useState<SelectOption | undefined>();
  return (
    <div>
      <Select
        options={options}
        onChange={setValue}
        value={value}
        label={'Ваши счета:'}
      />
    </div>
  );
};

export default Page;
