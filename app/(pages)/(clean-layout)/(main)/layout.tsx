import { Metadata } from 'next';

import { WithChildren } from '@/(shared)/types/general';

import styles from './styles.module.scss';

export const metadata: Metadata = {
  title: 'Arckat',
};

const Layout: React.FC<WithChildren> = ({ children }) => (
  <main className={styles.auth}>{children}</main>
);

export default Layout;
