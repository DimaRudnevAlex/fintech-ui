import { FormValues } from './types';

export const currencyOptions = [
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' },
  { value: 'RUB', label: 'RUB' },
];

export const defaultValues: FormValues = {
  senderAccount: null,
  recipientAccount: '',
  amount: '',
  currency: currencyOptions[0],
};
