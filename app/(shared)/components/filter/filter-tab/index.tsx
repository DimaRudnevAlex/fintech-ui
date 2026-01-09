import { clsx } from 'clsx';
import { LayoutGroup, motion } from 'framer-motion';

import { FilterTabProps } from './model/types';

import styles from './styles.module.scss';

const FilterTab = <T,>({ items, value, onChange }: FilterTabProps<T>) => {
  return (
    <LayoutGroup>
      <div className={clsx(styles.wrapper)}>
        {items.map((item) => {
          const isActive = item.value === value.value;

          return (
            <button
              key={String(item.value)}
              className={clsx(styles.tab)}
              onClick={() => onChange(item)}
              type="button"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className={styles.activeBackground}
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              )}

              <span
                className={clsx(styles.label, isActive && styles.activeLabel)}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </LayoutGroup>
  );
};

export default FilterTab;
