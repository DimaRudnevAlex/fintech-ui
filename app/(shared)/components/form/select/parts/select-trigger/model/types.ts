import { SelectProps } from '../../../model/types';

export type SelectTriggerProps = Pick<
  SelectProps,
  'placeholder' | 'isLoading'
> & { id: string };
