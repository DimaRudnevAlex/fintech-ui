import { FilterTabItem } from '@/(shared)/components/filter/filter-tab/model/types';

import { FilterType } from './types';

export const FILTER: FilterTabItem<FilterType>[] = [
  { label: 'all', value: 'all' },
  { label: 'income', value: 'income' },
  { label: 'expenses', value: 'expenses' },
];
