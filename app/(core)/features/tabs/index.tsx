import { clsx } from 'clsx';
import { motion } from 'framer-motion';

import { TabsProps } from './model/types';

import styles from './styles.module.scss';

const Tabs: React.FC<TabsProps> = ({
  tabs,
  value,
  onChange,
  className,
  layoutId = 'active-layout-id',
}) => {
  return (
    <div className={clsx(styles.tabs, className)}>
      {tabs.map((tab) => {
        const isActive = tab.id === value;

        return (
          <button
            key={tab.id}
            type="button"
            disabled={tab.disabled}
            onClick={() => !tab.disabled && onChange(tab.id)}
            className={`${styles.tab} 
              ${isActive ? styles.active : ''} 
              ${tab.disabled ? styles.disabled : ''}
            `}
          >
            {tab.label}

            {isActive && (
              <motion.div
                layoutId={layoutId}
                className={styles.indicator}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
