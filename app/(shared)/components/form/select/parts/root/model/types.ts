import { SelectOption } from '@/(shared)/components/form/select/model/types';

export type SelectRootProps<TOption extends SelectOption> = {
  value?: TOption;
  options: TOption[];
  onChange?: (option: TOption) => void;
  children: React.ReactNode;
};
