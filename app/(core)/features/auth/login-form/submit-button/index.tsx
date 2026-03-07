'use client';

import { BaseButton } from '@/(shared)/components/button';

import { useForm } from '@/(core)/features/auth/login-form/hooks/form-context';

import styles from './styles.module.scss';

const SubmitButton: React.FC = () => {
  const { submit } = useForm();

  return (
    <BaseButton size="lg" className={styles.submit} onClick={submit}>
      Войти
    </BaseButton>
  );
};

export default SubmitButton;
