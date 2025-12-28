export type SelectProps<TMeta = unknown> = {
  value?: SelectOption<TMeta>;
  placeholder?: string;
  onChange: (option: SelectOption<TMeta>) => void;
  isLoading?: boolean;
  options: SelectOption<TMeta>[];
  label?: string;
};

export type SelectOption<TMeta = unknown> = {
  label: string;
  value: string;
  meta?: TMeta;
};
