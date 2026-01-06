import * as RadixSelect from '@radix-ui/react-select';

import { SelectContentProps } from './model/types';

import styles from './styles.module.scss';

const SelectContent: React.FC<SelectContentProps> = ({ children, options }) => {
  const isEmpty = !options || options.length === 0;

  return (
    <RadixSelect.Portal>
      <RadixSelect.Content position="popper" asChild>
        <div className={styles.content}>
          <RadixSelect.Viewport className={styles.viewport}>
            {isEmpty ? (
              <div className={styles.empty}>Ничего не найдено</div>
            ) : (
              children
            )}
          </RadixSelect.Viewport>
        </div>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  );
};

export default SelectContent;
