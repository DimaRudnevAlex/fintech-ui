'use client';

import { useMutationState } from '@tanstack/react-query';

import { BaseButton } from '@/(shared)/components/button';

import { useForm } from '@/(core)/features/auth/login-form/hooks/form-context';

import styles from './styles.module.scss';

const SubmitButton: React.FC = () => {
  const { submit } = useForm();
  const ctx = useMutationState({ filters: { mutationKey: ['login'] } }).at(-1);

  return (
    <BaseButton
      size="lg"
      className={styles.submit}
      onClick={submit}
      isLoading={ctx ? ctx.status === 'pending' : false}
    >
      Войти
    </BaseButton>
  );
};

export default SubmitButton;
