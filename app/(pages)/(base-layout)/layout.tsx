import { WithChildren } from '@/(shared)/types/general';

import BaseLayout from '@/(core)/layouts/base';

const Layout: React.FC<WithChildren> = ({ children }) => <BaseLayout>{children}</BaseLayout>;

export default Layout;
