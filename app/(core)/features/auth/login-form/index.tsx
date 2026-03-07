import AuthLogo from '@/(core)/features/auth/auth-logo';
import Form from '@/(core)/features/auth/login-form/form';
import { FormProvider } from '@/(core)/features/auth/login-form/hooks/form-context';
import SubmitButton from '@/(core)/features/auth/login-form/submit-button';

import styles from './styles.module.scss';

const LoginForm: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <AuthLogo />
      <FormProvider>
        <div className={styles.content}>
          <Form />
          <SubmitButton />
        </div>
      </FormProvider>
    </section>
  );
};

export default LoginForm;
