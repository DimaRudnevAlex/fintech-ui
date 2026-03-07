import type { Metadata } from 'next';

import LoginForm from '@/(core)/features/auth/login-form';

export const metadata: Metadata = {
  title: 'Авторизация',
};

const Page: React.FC = () => {
  return <LoginForm />;
};

export default Page;
