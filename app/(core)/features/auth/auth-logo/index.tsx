import Logo from '@/(shared)/components/logo';
import Heading from '@/(shared)/components/typography/heading';

import styles from './styles.module.scss';

const AuthLogo: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <Heading variant="h1" className={styles.title}>
        {'Arckat'}
      </Heading>
    </div>
  );
};

export default AuthLogo;
