import { Table } from '@tanstack/react-table';

export type TableProps<TData> = {
  table: Table<TData>;
  loading?: boolean;
  skeletonRows?: number;
};
