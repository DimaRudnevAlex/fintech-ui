import { SelectProps } from '../../../model/types';

export type SelectTriggerProps = Pick<
  SelectProps,
  'placeholder' | 'isLoading' | 'onBlur'
> & { id: string; hasError?: boolean };
