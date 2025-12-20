import Link from 'next/link';

import { AsideSingleItemProps } from './model/types';

import styles from './styles.module.scss';

const AsideSingleItem: React.FC<AsideSingleItemProps> = ({ label, href, Icon }) => (
  <li>
    <Link href={href} className={styles.item}>
      {Icon && <div className={styles.icon}>{Icon}</div>}

      <div className={styles.text}>{label}</div>
    </Link>
  </li>
);

export default AsideSingleItem;
