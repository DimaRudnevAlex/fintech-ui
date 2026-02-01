import { SelectOption, SelectProps } from '../../../model/types';

export type SelectItemsProps<TOption extends SelectOption = SelectOption> =
  Pick<SelectProps<TOption>, 'options' | 'renderOption'>;
