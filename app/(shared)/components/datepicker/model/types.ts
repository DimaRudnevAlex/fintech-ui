import { CalendarProps } from '@/(shared)/components/сalendar';

export type DateTimePickerProps = {
  label?: string;
  value: Date | null;
  onChange: (value: Date | null) => void;
  className?: string;
  errors?: string[];
} & CalendarProps;
