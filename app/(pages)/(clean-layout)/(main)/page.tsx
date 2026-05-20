import Link from 'next/link';

import { LogIn, UserPlus } from 'lucide-react';

import { ROUTES } from '@/(shared)/constants/routes';

import Landing from '@/(core)/widgets/landing';

import styles from './styles.module.scss';

const Page: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.actions}>
        <Link href={ROUTES.LOGIN} className={styles.login}>
          <LogIn size={18} />
          <span>Войти</span>
        </Link>

        <Link href={ROUTES.REGISTER} className={styles.register}>
          <UserPlus size={18} />
          <span>Зарегистрироваться</span>
        </Link>
      </div>
      <Landing />
    </div>
  );
};

export default Page;
