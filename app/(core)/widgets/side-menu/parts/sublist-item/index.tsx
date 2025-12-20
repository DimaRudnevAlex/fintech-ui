'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { clsx } from 'clsx';

import { SublistItemProps } from './model/types';

import styles from './styles.module.scss';

const SublistItem: React.FC<SublistItemProps> = ({ label, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className={clsx(styles.item, isActive && styles.active)}>
      <Link href={href}>{label}</Link>
    </li>
  );
};

export default SublistItem;
