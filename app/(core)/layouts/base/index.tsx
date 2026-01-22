import { WithChildren } from '@/(shared)/types/general';

import Header from '@/(core)/widgets/header';
import SideMenu from '@/(core)/widgets/side-menu';

import styles from './styles.module.scss';

const BaseLayout: React.FC<WithChildren> = ({ children }) => (
  <div className={styles.page}>
    <SideMenu />
    <main className={styles.content}>
      <Header />
      {/*{children}*/}
    </main>
  </div>
);

export default BaseLayout;
