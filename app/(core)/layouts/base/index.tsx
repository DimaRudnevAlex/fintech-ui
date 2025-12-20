import { WithChildren } from '@/(shared)/types/general';

import Header from '@/(core)/widgets/header';
import SideMenu from '@/(core)/widgets/side-menu';

import styles from './styles.module.scss';

const BaseLayout: React.FC<WithChildren> = ({ children }) => (
  <div className={styles.page}>
    <Header />
    <SideMenu />
    <div className={styles.content}>{children}</div>
  </div>
);

export default BaseLayout;
