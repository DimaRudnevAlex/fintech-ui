import { Metadata } from 'next';

import { WithChildren } from '@/(shared)/types/general';

import BaseLayout from '@/(core)/layouts/base';

export const metadata: Metadata = {
  title: 'Личный кабинет',
};

const Layout: React.FC<WithChildren> = ({ children }) => (
  <BaseLayout>{children}</BaseLayout>
);

export default Layout;
