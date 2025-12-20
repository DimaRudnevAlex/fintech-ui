import { useState } from 'react';

import { clsx } from 'clsx';

import { AsideNestedItemProps } from './model/types';

import styles from './styles.module.scss';

const AsideNestedItem: React.FC<AsideNestedItemProps> = ({ label, Icon, children }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <li className={clsx(open && styles.open)}>
      <button onClick={() => setOpen((prev) => !prev)} className={styles.item}>
        {Icon && <div className={styles.icon}>{Icon}</div>}

        <div className={styles.text}>{label}</div>
      </button>
      {open && <ul>{children}</ul>}
    </li>
  );
};

export default AsideNestedItem;
