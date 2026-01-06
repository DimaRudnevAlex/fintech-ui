import { SelectLabelProps } from './model/types';

import styles from './styles.module.scss';

const SelectLabel: React.FC<SelectLabelProps> = ({ label, id }) => {
  if (!label) {
    return null;
  }
  return (
    <label htmlFor={id} className={styles.label}>
      {label}
    </label>
  );
};

export default SelectLabel;
