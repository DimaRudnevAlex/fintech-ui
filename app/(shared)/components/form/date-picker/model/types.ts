import { DateTimePickerProps } from '@/(shared)/components/datepicker/model/types';

export type ConnectedDateTimePickerProps = Omit<
  DateTimePickerProps,
  'onChange' | 'value' | 'errors'
>;
