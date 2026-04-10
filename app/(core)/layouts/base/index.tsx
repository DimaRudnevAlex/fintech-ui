import Line from '@/(shared)/components/visual/line';
import AuthBootstrap from '@/(shared)/lib/providers/auth-bootstrap';
import { WithChildren } from '@/(shared)/types/general';

import Header from '@/(core)/widgets/header';
import SideMenu from '@/(core)/widgets/side-menu';

import styles from './styles.module.scss';

const BaseLayout: React.FC<WithChildren> = ({ children }) => (
  <AuthBootstrap>
    <div className={styles.page}>
      <SideMenu />
      <main className={styles.wrapper}>
        <Header />
        <Line />
        <section className={styles.content}>{children}</section>
      </main>
    </div>
  </AuthBootstrap>
);

export default BaseLayout;
