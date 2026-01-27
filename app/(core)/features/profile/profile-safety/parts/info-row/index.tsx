import { BaseButton } from '@/(shared)/components/button';

import { SafetyRowProps } from './model/types';

import styles from './styles.module.scss';

const SafetyRow: React.FC<SafetyRowProps> = ({ text, label, action }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.label}>{label}</div>
        <div className={styles.text}>{text}</div>
      </div>
      <BaseButton>{action}</BaseButton>
    </div>
  );
};

export default SafetyRow;
