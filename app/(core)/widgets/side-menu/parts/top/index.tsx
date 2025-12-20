import Link from 'next/link';

import Logo from '@/(shared)/components/logo';
import Heading from '@/(shared)/components/typography/heading';

import styles from './styles.module.scss';

const AsideTop: React.FC = () => (
  <Link className={styles.top} href="/">
    <Logo className={styles.icon} />
    <Heading variant="h1" className={styles.text}>
      Fintech
    </Heading>
  </Link>
);

export default AsideTop;
