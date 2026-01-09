import { JSX } from 'react';

import { flexRender } from '@tanstack/react-table';
import { clsx } from 'clsx';

import Skeleton from '../skeleton';

import { TableProps } from './model/types';
import { getCommonPinningStyles } from './utils';

import styles from './styles.module.scss';

const Table = <TData,>({
  table,
  loading,
  skeletonRows = 10,
}: TableProps<TData>): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const { column } = header;
                const isSortable = column.getCanSort();
                const sortDirection = column.getIsSorted();

                return (
                  <th
                    key={header.id}
                    style={{
                      cursor: 'pointer',
                      ...getCommonPinningStyles(column),
                    }}
                    colSpan={header.colSpan}
                    onClick={header.column.getToggleSortingHandler()}
                    className={clsx(isSortable && 'sortable', sortDirection)}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {loading
            ? Array.from({ length: skeletonRows }).map((_, i) => (
                <tr className={styles.skeleton} key={i}>
                  {table.getAllColumns().map((column, j) => (
                    <td
                      style={{ ...getCommonPinningStyles(column) }}
                      key={`skeleton-${i}${j}`}
                    >
                      <Skeleton />
                    </td>
                  ))}
                </tr>
              ))
            : table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    const { column } = cell;

                    return (
                      <td
                        style={{ ...getCommonPinningStyles(column) }}
                        key={cell.id}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
