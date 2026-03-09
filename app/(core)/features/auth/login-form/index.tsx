'use client';

import { motion, Variants } from 'framer-motion';

import { ROUTES } from '@/(shared)/constants/routes';

import AuthLogo from '@/(core)/features/auth/auth-logo';
import AuthLink from '@/(core)/features/auth/link';
import Form from '@/(core)/features/auth/login-form/form';
import { FormProvider } from '@/(core)/features/auth/login-form/hooks/form-context';
import SubmitButton from '@/(core)/features/auth/login-form/submit-button';

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

const LoginForm: React.FC = () => {
  return (
    <motion.section
      className={styles.wrapper}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <AuthLogo />
      <FormProvider>
        <motion.div className={styles.content} variants={item}>
          <Form />
          <SubmitButton />
        </motion.div>
      </FormProvider>
      <AuthLink to={ROUTES.REGISTER}>{'Зарегистрироваться'}</AuthLink>
    </motion.section>
  );
};

export default LoginForm;
