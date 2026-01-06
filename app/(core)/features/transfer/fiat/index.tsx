'use client';

import { useState } from 'react';

import { ArrowLeftRight } from 'lucide-react';

import { BaseButton } from '@/(shared)/components/button';
import Select from '@/(shared)/components/form/select';
import { SelectOption } from '@/(shared)/components/form/select/model/types';
import StaticTextField from '@/(shared)/components/form/static-text-field';
import TextField from '@/(shared)/components/form/text-field';

import AmountCurrencyField from '@/(core)/features/transfer/fiat/parts/amount-currency-field';

import styles from './styles.module.scss';

const options: SelectOption<{ icon?: string }>[] = [
  { label: 'Счет ****1234 (Текущий)', value: '12345678901234' },
  { label: 'Счет ****5678 (Сберегательный)', value: '56789012345678' },
  { label: 'Счет ****9012 (USD)', value: '90123456789012' },
];

const TransferFiatForm = () => {
  const [value, setValue] = useState<SelectOption | undefined>();
  const [text, setText] = useState<string>('');
  return (
    <div className={styles.wrapper}>
      <Select
        options={options}
        onChange={setValue}
        value={value}
        label={'Ваши счета:'}
        placeholder={'Ваши счета'}
      />
      <TextField
        value={text}
        onChange={setText}
        placeholder="Номер счета"
        label={'Номер счета:'}
      />

      <AmountCurrencyField />

      <div className={styles.info}>
        <StaticTextField label={'Комиссия:'} value={'10%'} />
        <StaticTextField label={'Итоговая сумма:'} value={'100 USD'} />
      </div>

      <div className={styles.submit}>
        <BaseButton iconLeft={<ArrowLeftRight />} size="lg">
          {'Перевести'}
        </BaseButton>
      </div>
    </div>
  );
};

export default TransferFiatForm;
