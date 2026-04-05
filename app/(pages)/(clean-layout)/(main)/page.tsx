import BaseLink from '@/(shared)/components/link';
import { ROUTES } from '@/(shared)/constants/routes';

import Landing from '@/(core)/widgets/landing';

import styles from './styles.module.scss';

const Page: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.actions}>
        <BaseLink size="lg" href={ROUTES.LOGIN}>
          Войти
        </BaseLink>
        <BaseLink size="lg" href={ROUTES.REGISTER}>
          Зарегистрироваться
        </BaseLink>
      </div>
      <Landing />
    </div>
  );
};

export default Page;
