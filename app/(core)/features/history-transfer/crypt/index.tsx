'use client';

import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

import FilterTab from '@/(shared)/components/filter/filter-tab';

import { FILTER } from './model/config-filter';
import { Filter, HistoryCryptProps } from './model/types';
import HistoryCryptoTable from './parts/table';

const HistoryCrypt: React.FC<HistoryCryptProps> = ({ data }) => {
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
      <FilterTab value={filter} onChange={setFilter} items={filterItems} />
      <HistoryCryptoTable data={data} globalFilter={filter} />
    </>
  );
};

export default HistoryCrypt;
