'use client';

import { useId } from 'react';
import { useTranslations } from 'next-intl';

import TextField from 'app/(shared)/components/text-field';

import { withForm } from '@/(shared)/hooks/form';

import {
  currencyOptions,
  defaultValues,
} from '@/(core)/features/transfer/fiat/model/constants';

import styles from './styles.module.scss';

const AmountCurrencyField = withForm({
  defaultValues: defaultValues,
  render: function Render({ form }) {
    const t = useTranslations('transferFiat.form');
    const id = useId();

    const handleAmountChange = (v: string) => {
      if (/^\d*([.,]\d{0,2})?$/.test(v)) {
        form.setFieldValue('amount', v);
      }
    };

    return (
      <div>
        <label htmlFor={id} className={styles.label}>
          {t('amount')}
        </label>
        <div className={styles.content}>
          <form.Field
            name={'amount'}
            children={(field) => (
              <TextField
                value={field.state.value}
                onChange={handleAmountChange}
                placeholder="0.00"
                className={styles.amount}
                id={id}
                errors={field.state.meta.errors.map(
                  (e) => (e as unknown as { message: string })?.message,
                )}
              />
            )}
          />

          <div className={styles.divider} />

          <form.AppField
            name="currency"
            children={(field) => (
              <field.SelectField options={currencyOptions} />
            )}
          />
        </div>
      </div>
    );
  },
});

export default AmountCurrencyField;
