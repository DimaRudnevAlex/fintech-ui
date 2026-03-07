'use client';

import { use, useImperativeHandle } from 'react';
import { useRouter } from 'next/navigation';

import Heading from '@/(shared)/components/typography/heading';
import { ROUTES } from '@/(shared)/constants/routes';
import { useAppForm } from '@/(shared)/hooks/form';

import { schema } from '@/(core)/features/auth/login-form/form/model/schema';

import { FormContext } from '../hooks/form-context';

import styles from './styles.module.scss';

const Form: React.FC = () => {
  const router = useRouter();
  const methodsRef = use(FormContext);

  const form = useAppForm({
    defaultValues: { login: '', password: '' },
    onSubmit: () => {
      router.push(ROUTES.TRANSFER_FIAT);
    },
    validators: {
      onSubmit: schema,
    },
  });

  useImperativeHandle(
    methodsRef,
    () => ({
      reset: () => form.reset(),
      validate: async () => {
        const fieldWithError = form.validate('submit');
        return Object.keys(fieldWithError).length === 0;
      },
      submit: () => form.handleSubmit(),
    }),
    [form],
  );

  return (
    <div>
      <Heading variant="h4" className={styles.title}>
        Авторизация
      </Heading>
      <form className={styles.content} onSubmit={(e) => e.preventDefault()}>
        <form.AppField
          name="login"
          children={(field) => (
            <field.TextField
              label={'Логин'}
              placeholder={'Логин'}
              autoComplete="off"
            />
          )}
        />

        <form.AppField
          name="password"
          children={(field) => (
            <field.TextField
              label={'Пароль'}
              placeholder={'Пароль'}
              autoComplete="off"
              type="password"
            />
          )}
        />
      </form>
    </div>
  );
};

export default Form;
