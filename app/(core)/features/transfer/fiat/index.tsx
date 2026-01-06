'use client';

import { useAppForm } from '@/(shared)/hooks/form';

import {
  defaultValues,
  options,
} from '@/(core)/features/transfer/fiat/model/constants';
import { transferSchema } from '@/(core)/features/transfer/fiat/model/schema';
import AmountCurrencyField from '@/(core)/features/transfer/fiat/parts/amount-currency-field';
import SubmitButton from '@/(core)/features/transfer/fiat/parts/submit-button';
import TotalAmount from '@/(core)/features/transfer/fiat/parts/total-amount';

import styles from './styles.module.scss';

const TransferFiatForm = () => {
  const form = useAppForm({
    defaultValues: defaultValues,
    onSubmit: ({ value }) => {
      console.log(value);
    },
    validators: {
      onChange: transferSchema,
    },
  });

  return (
    <form className={styles.wrapper} onSubmit={(e) => e.preventDefault()}>
      <form.AppField
        name="senderAccount"
        children={(field) => (
          <field.SelectField
            label={'Ваши счета:'}
            placeholder={'Ваши счета'}
            options={options}
          />
        )}
      />

      <form.AppField
        name="recipientAccount"
        children={(field) => (
          <field.TextField placeholder="Номер счета" label={'Номер счета:'} />
        )}
      />

      <AmountCurrencyField form={form} />

      <TotalAmount form={form} commission={10} />

      <SubmitButton form={form} />
    </form>
  );
};

export default TransferFiatForm;
