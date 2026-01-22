import { clsx } from 'clsx';
import { motion } from 'framer-motion';

import { HistoryTabsProps } from '@/(core)/features/history-transfer/menu-tab/model/types';

import styles from './styles.module.scss';

const HistoryTabs: React.FC<HistoryTabsProps> = ({
  activeTab,
  onChange,
  tabs,
}) => {
  const activeIndex = tabs.findIndex((tab) => tab.value === activeTab.value);

  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => {
        const isActive = activeTab.value === tab.value;

        return (
          <button
            key={tab.value}
            className={clsx(isActive && styles.active)}
            onClick={() => onChange(tab)}
          >
            {tab.label}
          </button>
        );
      })}

      <motion.div
        className={styles.indicator}
        layout
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
        style={{
          width: `${100 / tabs.length}%`,
          left: `${(100 / tabs.length) * activeIndex}%`,
        }}
      />
    </div>
  );
};

export default HistoryTabs;
