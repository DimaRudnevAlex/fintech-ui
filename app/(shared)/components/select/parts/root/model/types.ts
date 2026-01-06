import { SelectOption } from '@/(shared)/components/select/model/types';

export type SelectRootProps<TOption extends SelectOption> = {
  value?: TOption;
  options: TOption[];
  onChange?: (option: TOption) => void;
  children: React.ReactNode;
};
