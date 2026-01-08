import { useTranslations } from 'next-intl';

import { useStore } from '@tanstack/react-form';

import StaticTextField from '@/(shared)/components/static-text-field';
import { withForm } from '@/(shared)/hooks/form';

import { defaultValues } from '@/(core)/features/transfer/fiat/model/constants';
import { calculateTotal } from '@/(core)/features/transfer/fiat/utils/calculate-total';

import styles from './styles.module.scss';

const TotalAmount = withForm({
  defaultValues: defaultValues,
  props: {
    commission: null,
  } as { commission: number | null },
  render: function Render({ form, commission }) {
    const t = useTranslations('transferFiat.form');

    const { currency, amount } = useStore(form.store, (state) => ({
      amount: state.values.amount,
      currency: state.values.currency,
    }));

    const totalAmount = calculateTotal(amount, commission);

    return (
      <div className={styles.wrapper}>
        <StaticTextField
          label={t('commission')}
          value={commission && `${commission} %`}
        />
        <StaticTextField
          label={t('totalAmount')}
          value={currency && totalAmount && `${totalAmount} ${currency.label}`}
        />
      </div>
    );
  },
});
export default TotalAmount;
