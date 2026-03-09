import BaseLink from '@/(shared)/components/link';
import { ROUTES } from '@/(shared)/constants/routes';

import styles from './styles.module.scss';

const Page: React.FC = () => {
  return (
    <div className={styles.page}>
      <BaseLink size="lg" href={ROUTES.LOGIN}>
        Войти
      </BaseLink>
      <BaseLink size="lg" href={ROUTES.REGISTER}>
        Зарегистрироваться
      </BaseLink>
    </div>
  );
};

export default Page;
