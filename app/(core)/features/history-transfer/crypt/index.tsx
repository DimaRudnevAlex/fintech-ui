'use client';

import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

import FilterTab from '@/(shared)/components/filter/filter-tab';

import { FILTER } from './model/config-filter';
import { Filter, HistoryCryptProps } from './model/types';
import ExportFileCrypto from './parts/export-file';
import HistoryCryptoTable from './parts/table';

import styles from './styles.module.scss';

const HistoryCrypto: React.FC<HistoryCryptProps> = ({ data }) => {
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
        <ExportFileCrypto data={data} />
      </div>
      <HistoryCryptoTable data={data} globalFilter={filter} />
    </>
  );
};

export default HistoryCrypto;
