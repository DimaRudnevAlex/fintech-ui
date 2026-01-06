import { SelectProps } from '@/(shared)/components/select/model/types';

export type ConnectedSelectProps = Omit<
  SelectProps,
  'onChange' | 'value' | 'errors'
>;
