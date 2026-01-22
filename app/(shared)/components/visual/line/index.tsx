import { clsx } from 'clsx';

import { LineProps } from './model/types';

import styles from './styles.module.scss';

const Line: React.FC<LineProps> = ({ className }) => {
  return <div className={clsx(styles.line, className)} />;
};

export default Line;
