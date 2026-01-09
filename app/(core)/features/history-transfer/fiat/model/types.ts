export type HistoryFiatProps = {
  data: Data[];
};

export type Data = {
  id: string;
  type: string;
  createdAt: string;
  status: string;
  details: string;
  amount: number;
};

export type Filter = {
  label: string;
  value: FilterType;
};

export type FilterType = 'all' | 'expenses' | 'income';
