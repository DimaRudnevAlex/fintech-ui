import { redirect } from 'next/navigation';

import { ROUTES } from '@/(shared)/constansts/routes';

const Page = () => {
  redirect(ROUTES.PROFILE);
};

export default Page;
