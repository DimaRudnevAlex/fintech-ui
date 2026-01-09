export type FilterTabProps<T = string> = {
  onChange: (filter: FilterTabItem<T>) => void;
  items: FilterTabItem<T>[];
  value: FilterTabItem<T>;
};

export type FilterTabItem<T = string> = {
  label: string;
  value: T;
};
