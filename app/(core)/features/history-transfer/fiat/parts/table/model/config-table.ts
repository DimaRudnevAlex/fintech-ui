import { useTranslations } from 'next-intl';

import { ColumnDef, createColumnHelper } from '@tanstack/table-core';

import { Data } from '@/(core)/features/history-transfer/fiat/model/types';

const columnHelper = createColumnHelper<Data>();

export const getColumns = (
  t: ReturnType<typeof useTranslations>,
): ColumnDef<Data, any>[] => {
  return [
    columnHelper.accessor('type', {
      header: () => t('type'),
      cell: (data) => data.getValue(),
    }),
    columnHelper.accessor('details', {
      header: () => t('details'),
      cell: (data) => data.getValue(),
    }),
    columnHelper.accessor('createdAt', {
      header: () => t('createdAt'),
      cell: (data) => data.getValue(),
    }),
    columnHelper.accessor('amount', {
      header: () => t('amount'),
      cell: (data) => data.getValue(),
    }),
    columnHelper.accessor('status', {
      header: () => t('status'),
      cell: (data) => data.getValue(),
    }),
  ];
};
