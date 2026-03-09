import type { Metadata } from 'next';

import RegisterForm from '@/(core)/features/auth/register-form';

export const metadata: Metadata = {
  title: 'Регистрация',
};

const Page: React.FC = () => {
  return <RegisterForm />;
};

export default Page;
