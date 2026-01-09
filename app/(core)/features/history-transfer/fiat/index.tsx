'use client';

import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

import FilterTab from '@/(shared)/components/filter/filter-tab';

import { FILTER } from './model/config-filter';
import { Filter, HistoryFiatProps } from './model/types';
import ExportFileFiat from './parts/export-file';
import HistoryFiatTable from './parts/table';

import styles from './styles.module.scss';

const HistoryFiat: React.FC<HistoryFiatProps> = ({ data }) => {
  const t = useTranslations('historyFiat.filters');

  const [filter, setFilter] = useState<Filter>({
    label: 'all',
    value: 'all',
  });

  const filterItems = useMemo(
    () =>
      FILTER.map((item) => ({
        value: item.value,
        label: t(item.label),
      })),
    [t],
  );

  return (
    <>
      <div className={styles.wrapper}>
        <FilterTab value={filter} onChange={setFilter} items={filterItems} />
        <ExportFileFiat data={data} />
      </div>

      <HistoryFiatTable data={data} globalFilter={filter} />
    </>
  );
};

export default HistoryFiat;
