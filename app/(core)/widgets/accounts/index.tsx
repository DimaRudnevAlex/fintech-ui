'use client';

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import AccountCard from '@/(core)/features/accounts/card';
import SelectAccounts from '@/(core)/features/accounts/select-accounts';

import { MOCK_ACCOUNTS } from './model/mock';
import { Account } from './model/types';

import styles from './styles.module.scss';

const AccountsWidget: React.FC = () => {
  const [activeAccount, setActiveAccount] = useState<Account>(MOCK_ACCOUNTS[0]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeAccount.meta.accountNumber}
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <AccountCard {...activeAccount.meta} />
        </motion.div>
      </AnimatePresence>

      <SelectAccounts
        className={styles.accounts}
        value={activeAccount}
        onChange={(v) => setActiveAccount(v)}
        options={MOCK_ACCOUNTS}
        placeholder={'Select Account'}
      />
    </>
  );
};

export default AccountsWidget;
