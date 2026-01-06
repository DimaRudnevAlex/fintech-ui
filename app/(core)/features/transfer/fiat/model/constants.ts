import { SelectOption } from '@/(shared)/components/select/model/types';

import { FormValues } from './types';

export const options: SelectOption<{ total: number }>[] = [
  {
    label: 'Счет ****1234 (Текущий) --- 1000',
    value: '12345678901234',
    meta: { total: 1000 },
  },
  {
    label: 'Счет ****5678 (Сберегательный) --- 5000',
    value: '56789012345678',
    meta: { total: 5000 },
  },
  {
    label: 'Счет ****9012 (USD) --- 2000',
    value: '90123456789012',
    meta: { total: 2000 },
  },
];

export const currencyOptions = [
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' },
  { value: 'RUB', label: 'RUB' },
];

export const defaultValues: FormValues = {
  senderAccount: options[0],
  recipientAccount: '',
  amount: '',
  currency: currencyOptions[0],
};
