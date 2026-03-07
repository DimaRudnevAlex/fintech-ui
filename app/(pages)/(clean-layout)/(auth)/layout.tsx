import { WithChildren } from '@/(shared)/types/general';

import styles from './styles.module.scss';

const Layout: React.FC<WithChildren> = ({ children }) => (
  <main className={styles.auth}>{children}</main>
);

export default Layout;
