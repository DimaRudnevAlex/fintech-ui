import { Suspense } from 'react';

import TransferFiatForm from '@/(core)/features/transfer/fiat';

const Page: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TransferFiatForm />
    </Suspense>
  );
};

export default Page;
