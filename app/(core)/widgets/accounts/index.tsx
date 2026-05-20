'use client';

import { useEffect, useMemo, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { useGetAccountList } from '@/(shared)/api/hooks/account/use-get-account-list';
import { AccountItem } from '@/(shared)/api/services/account/get-account-list';
import Line from '@/(shared)/components/visual/line';

import AccountCard from '@/(core)/features/accounts/card';
import CreateFiat from '@/(core)/features/accounts/create-fiat';
import SelectAccounts from '@/(core)/features/accounts/select-accounts';

import styles from './styles.module.scss';

const AccountsWidget: React.FC = () => {
  const { data, isLoading } = useGetAccountList();

  const [activeAccount, setActiveAccount] = useState<{
    label: string;
    value: string;
    meta: AccountItem;
  } | null>(null);

  const options = useMemo(() => {
    const transformAccount = (
      raw: AccountItem,
    ): { label: string; value: string; meta: AccountItem } => ({
      label: `${raw.account_type.toUpperCase()} · ${raw.currency}`,
      value: raw.account_number,
      meta: {
        ...raw,
      },
    });

    return data?.map(transformAccount) ?? [];
  }, [data]);

  useEffect(() => {
    if (options.length) {
      const defaultAccount =
        options.find((a) => a.meta.is_default) ?? options[0];
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveAccount(defaultAccount);
    }
  }, [options]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeAccount?.label}
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <AccountCard {...activeAccount?.meta} isLoading={isLoading} />
        </motion.div>
      </AnimatePresence>

      <SelectAccounts
        className={styles.accounts}
        value={activeAccount}
        onChange={(v) => setActiveAccount(v)}
        options={options}
        placeholder={'Select Account'}
      />

      <Line className={styles.line} />
      <CreateFiat className={styles.create} />
    </>
  );
};

export default AccountsWidget;
