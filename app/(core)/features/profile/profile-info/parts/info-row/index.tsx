import { InfoRowProps } from './model/types';

import styles from './styles.module.scss';

const InfoRow: React.FC<InfoRowProps> = ({ value, label }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>{label}</div>
      <div className={styles.text}>{value}</div>
    </div>
  );
};

export default InfoRow;
