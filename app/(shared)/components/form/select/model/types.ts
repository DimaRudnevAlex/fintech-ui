export type SelectOption<TMeta = unknown> = {
  label: string;
  value: string;
  meta?: TMeta;
};

export type SelectProps<TOption extends SelectOption = SelectOption> = {
  value?: TOption;
  placeholder?: string;
  onChange: (option: TOption) => void;
  isLoading?: boolean;
  options: TOption[];
  label?: string;
  className?: string;
};
