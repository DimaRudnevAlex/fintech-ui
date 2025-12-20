import { redirect } from 'next/navigation';

import { ROUTES } from '@/(shared)/constants/routes';

const Page = () => {
  redirect(ROUTES.PROFILE);
};

export default Page;
