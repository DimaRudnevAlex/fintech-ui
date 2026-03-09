import Link from 'next/link';

import { clsx } from 'clsx';

import { AuthLinkProps } from './model/types';

import styles from './styles.module.scss';

const AuthLink: React.FC<AuthLinkProps> = ({ children, to, className }) => {
  return (
    <Link href={to} className={clsx(styles.link, className)}>
      {children}
    </Link>
  );
};

export default AuthLink;
