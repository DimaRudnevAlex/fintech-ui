import { ComponentProps } from 'react';

import Select from '@/(shared)/components/select';

export type SelectAccountsProps = Pick<
  ComponentProps<typeof Select<Option>>,
  'value' | 'options' | 'onChange' | 'placeholder' | 'className'
>;

type Option = {
  label: string;
  value: string;
  meta: {
    accountName: string;
    accountNumber: string;
    currency: string;
    balance: string;
    income: string;
    expense: string;
  };
};
