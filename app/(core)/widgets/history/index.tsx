'use client';

import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

import { AnimatePresence, motion } from 'framer-motion';

import HistoryCrypt from '@/(core)/features/history-transfer/crypt';
import HistoryFiat from '@/(core)/features/history-transfer/fiat';
import HistoryTabs from '@/(core)/features/history-transfer/menu-tab';
import { TABS } from '@/(core)/features/history-transfer/menu-tab/model/config-tab';

import { mockTransactionsCrypto, mockTransactionsFiat } from './mock';

const HistoryWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const t = useTranslations('historyFiat.menu');

  const translateTab = useMemo(
    () => TABS.map((tab) => ({ ...tab, label: t(tab.label) })),
    [t],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <HistoryTabs
        activeTab={activeTab}
        onChange={setActiveTab}
        tabs={translateTab}
      />
      <AnimatePresence mode="wait">
        {activeTab.value === 'fiat' && (
          <motion.div
            key={activeTab.value}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <HistoryFiat data={mockTransactionsFiat} />
          </motion.div>
        )}

        {activeTab.value === 'crypto' && (
          <motion.div
            key={activeTab.value}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <HistoryCrypt data={mockTransactionsCrypto} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HistoryWidget;
