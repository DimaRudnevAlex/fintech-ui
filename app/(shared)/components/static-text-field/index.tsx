import { StaticTextFieldProps } from './model/types';

import styles from './styles.module.scss';

const StaticTextField: React.FC<StaticTextFieldProps> = ({ value, label }) => {
  return (
    <div className={styles.wrapper}>
      {label && (
        <span className={styles.label}>
          {label}
          {':'}
        </span>
      )}
      <p className={styles.text}>{value || ''}</p>
    </div>
  );
};

export default StaticTextField;
