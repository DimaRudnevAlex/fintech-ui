import { SelectOption, SelectProps } from '../../../model/types';

export type SelectTriggerProps<TOption extends SelectOption = SelectOption> =
  Pick<
    SelectProps<TOption>,
    'placeholder' | 'isLoading' | 'onBlur' | 'value'
  > & {
    id: string;
    hasError?: boolean;
    renderValue?: (option: TOption) => React.ReactNode;
  };
