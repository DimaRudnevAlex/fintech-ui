import { TextFieldProps } from '@/(shared)/components/text-field/model/types';

export type ConnectedTextFieldProps = Omit<
  TextFieldProps,
  'onChange' | 'value' | 'errors'
>;
