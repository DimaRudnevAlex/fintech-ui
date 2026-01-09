import { ExcelExportConfig } from '@/(shared)/lib/excel/types';

import { Data } from '@/(core)/features/history-transfer/crypt/model/types';

export const cryptoExcelConfig: ExcelExportConfig<Data> = {
  fileName: 'crypto-history',

  sheets: [
    {
      name: 'Crypto',

      columns: [
        { header: 'ID', accessor: 'id', width: 10 },
        { header: 'Type', accessor: 'type', width: 15 },
        { header: 'Details', accessor: 'details', width: 30 },
        { header: 'Amount', accessor: 'amount', width: 15 },
        {
          header: 'Created',
          accessor: (u) => new Date(u.createdAt).toLocaleDateString(),
          width: 20,
        },
        { header: 'Status', accessor: 'status', width: 15 },
      ],
    },
  ],

  onSuccess: () => console.log('Excel exported'),
  onError: (e) => console.error('Export failed', e),
};
