'use client';

import { useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';

import { motion } from 'framer-motion';

import { useGetAccountList } from '@/(shared)/api/hooks/account/use-get-account-list';
import { useAppForm } from '@/(shared)/hooks/form';
import { useConfirmation } from '@/(shared)/lib/providers/confirmation-provider';

import { BalanceParser } from '@/(core)/features/transfer/fiat/utils/format-balance';

import { defaultValues } from './model/constants';
import { transferSchema } from './model/schema';
import AmountCurrencyField from './parts/amount-currency-field';
import SubmitButton from './parts/submit-button';
import TotalAmount from './parts/total-amount';

import styles from './styles.module.scss';

const TransferFiatForm = () => {
  const t = useTranslations('transferFiat.form');
  const tNotification = useTranslations('transferFiat.notification');
  const confirmSuccess = useConfirmation();

  const form = useAppForm({
    defaultValues: defaultValues,
    onSubmit: ({ formApi }) => {
      confirmSuccess({
        title: tNotification('done'),
        subtitle: tNotification('sentMoney'),
      });
    },
    validators: {
      onSubmit: transferSchema(t),
    },
  });

  const { data, isLoading } = useGetAccountList();

  useEffect(() => {
    if (data) {
      const defaultAccount = data.find((acc) => acc.is_default);
      if (!defaultAccount) return;
      form.setFieldValue('senderAccount', {
        label: `${defaultAccount.account_number} --- ${BalanceParser.parse(defaultAccount.balance).formatted}`,
        value: defaultAccount.account_number,
        meta: { total: 1000, type: defaultAccount.account_type },
      });
    }
  }, [data, form]);

  const optionsAccounts = useMemo(() => {
    return (
      data
        ?.map((acc) => ({
          label: `${acc.account_number} --- ${BalanceParser.parse(acc.balance).formatted}`,
          value: acc.account_number,
          meta: { total: 1000, type: acc.account_type },
        }))
        .filter((acc) => acc.meta.type === 'fiat') ?? []
    );
  }, [data]);
  return (
    <motion.form
      className={styles.wrapper}
      onSubmit={(e) => e.preventDefault()}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <form.AppField
        name="senderAccount"
        children={(field) => (
          <field.SelectField
            label={t('senderAccounts')}
            placeholder={t('senderAccounts')}
            options={optionsAccounts}
            isLoading={isLoading}
          />
        )}
      />

      <form.AppField
        name="recipientAccount"
        children={(field) => (
          <field.TextField
            placeholder={t('recipientAccount')}
            label={t('recipientAccount')}
          />
        )}
      />

      <AmountCurrencyField form={form} />

      <TotalAmount form={form} commission={10} />

      <SubmitButton form={form} />
    </motion.form>
  );
};

export default TransferFiatForm;
