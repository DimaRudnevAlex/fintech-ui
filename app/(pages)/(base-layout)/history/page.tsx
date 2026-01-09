import { mockTransactions } from '@/(pages)/(base-layout)/history/mock';

import HistoryFiat from '@/(core)/features/history-transfer/fiat';

const Page: React.FC = () => {
  return <HistoryFiat data={mockTransactions} />;
};

export default Page;
