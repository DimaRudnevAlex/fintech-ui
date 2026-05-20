import { ComponentProps } from 'react';

import { AccountItem } from '@/(shared)/api/services/account/get-account-list';
import Select from '@/(shared)/components/select';

export type SelectAccountsProps = Pick<
  ComponentProps<typeof Select<Option>>,
  'value' | 'options' | 'onChange' | 'placeholder' | 'className'
>;

type Option = {
  label: string;
  value: string;
  meta: AccountItem;
};
