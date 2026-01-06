'use client';

import { useState } from 'react';

import Select from '@/(shared)/components/form/select';
import TextField from '@/(shared)/components/form/text-field';

import styles from './styles.module.scss';

export type CurrencyOption = {
  value: string;
  label: string;
  meta: {
    symbol: string;
    flag: string;
  };
};
const currencyOptions: CurrencyOption[] = [
  { value: 'USD', label: 'USD', meta: { symbol: '$', flag: '🇺🇸' } },
  { value: 'EUR', label: 'EUR', meta: { symbol: '€', flag: '🇪🇺' } },
  { value: 'RUB', label: 'RUB', meta: { symbol: '₽', flag: '🇷🇺' } },
];

const AmountCurrencyField: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [currency, setCurrency] = useState<CurrencyOption>(currencyOptions[0]);

  const handleAmountChange = (v: string) => {
    if (/^\d*([.,]\d{0,2})?$/.test(v)) {
      setAmount(v);
    }
  };
  return (
    <div>
      <div className={styles.content}>
        <TextField
          label={'Сумма для перевода:'}
          value={amount}
          onChange={handleAmountChange}
          placeholder="0.00"
          className={styles.amount}
        />

        <div className={styles.divider} />

        <Select
          options={currencyOptions}
          value={currency}
          onChange={setCurrency}
        />
      </div>
    </div>
  );
};

export default AmountCurrencyField;
