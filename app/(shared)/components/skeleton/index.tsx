import { clsx } from 'clsx';

import styles from './styles.module.scss';

const Skeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={clsx(styles.skeleton, className)} />
);

export default Skeleton;
