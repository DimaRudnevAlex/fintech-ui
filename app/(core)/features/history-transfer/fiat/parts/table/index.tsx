import { useTranslations } from 'next-intl';

import {
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import Table from '@/(shared)/components/table';

import { Filter } from '../../model/types';

import { getColumns } from './model/config-table';
import { HistoryFiatTableProps } from './model/types';

const HistoryFiatTable: React.FC<HistoryFiatTableProps> = ({
  data,
  globalFilter,
}) => {
  const t = useTranslations('historyFiat');

  const table = useReactTable({
    data,
    state: {
      globalFilter: globalFilter,
    },
    globalFilterFn: (row, _columnId, filterValue: Filter) => {
      const value = row.original.amount;

      if (filterValue.value === 'income') {
        return value > 0;
      }

      if (filterValue.value === 'expenses') {
        return value < 0;
      }

      return true;
    },
    enableSorting: true,
    columns: getColumns(t),
    autoResetPageIndex: false,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return <Table table={table} />;
};

export default HistoryFiatTable;
