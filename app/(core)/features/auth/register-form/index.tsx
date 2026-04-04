'use client';

import { motion, Variants } from 'framer-motion';

import { BaseButton } from '@/(shared)/components/button';
import Heading from '@/(shared)/components/typography/heading';
import { ROUTES } from '@/(shared)/constants/routes';
import { useAppForm } from '@/(shared)/hooks/form';

import AuthLogo from '@/(core)/features/auth/auth-logo';
import AuthLink from '@/(core)/features/auth/link';
import { useRegisterMutation } from '@/(core)/features/auth/register-form/hooks/use-register-mutation';

import { defaultValues } from './model/constants';
import { schema } from './model/schema';

import styles from './styles.module.scss';

const container: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
      staggerChildren: 0.06,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: 'easeOut' },
  },
};

const RegisterForm: React.FC = () => {
  const { mutate, isPending } = useRegisterMutation();
  const form = useAppForm({
    defaultValues: defaultValues,
    onSubmit: ({ value }) => {
      mutate({
        username: value.email,
        password: value.password,
        email: value.email,
      });
    },
    validators: {
      onSubmit: schema,
    },
  });

  return (
    <motion.section
      className={styles.wrapper}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <AuthLogo />
      <motion.div className={styles.content} variants={item}>
        <Heading variant="h4" className={styles.title}>
          Регистрация
        </Heading>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <form.AppField
            name="firstName"
            children={(field) => (
              <field.TextField
                label={'Имя'}
                placeholder={'Имя'}
                autoComplete="off"
              />
            )}
          />

          <form.AppField
            name="middleName"
            children={(field) => (
              <field.TextField
                label={'Отчество'}
                placeholder={'Отчество'}
                autoComplete="off"
              />
            )}
          />

          <form.AppField
            name="lastName"
            children={(field) => (
              <field.TextField
                label={'Фамилия'}
                placeholder={'Фамилия'}
                autoComplete="off"
              />
            )}
          />

          <form.AppField
            name="email"
            children={(field) => (
              <field.TextField
                label={'Почта'}
                placeholder={'Почта'}
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

          <form.AppField
            name="confirmPassword"
            children={(field) => (
              <field.TextField
                label={'Подтверждение пароля'}
                placeholder={'Подтверждение пароля'}
                autoComplete="off"
                type="password"
              />
            )}
          />
        </form>

        <BaseButton
          size="lg"
          className={styles.submit}
          isLoading={isPending}
          onClick={() => {
            form.validate('submit');
            form.handleSubmit();
          }}
        >
          Зарегистрироваться
        </BaseButton>
      </motion.div>
      <AuthLink to={ROUTES.LOGIN}>{'Войти'}</AuthLink>
    </motion.section>
  );
};

export default RegisterForm;
