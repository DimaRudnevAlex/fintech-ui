import { useStore } from '@tanstack/react-form';

import { DateTimePicker } from '@/(shared)/components/datepicker';
import { useFieldContext } from '@/(shared)/hooks/form/form-context';

import { ConnectedDateTimePickerProps } from './model/types';

const ConnectedDatePicker: React.FC<ConnectedDateTimePickerProps> = ({
  mode,
  label,
  ...props
}) => {
  const field = useFieldContext<Date | null>();
  const errors = useStore(field.store, (state) => {
    return state.meta.errors
      .map((error) => {
        if (typeof error === 'object') {
          return error.message;
        }

        return error;
      })
      .filter(Boolean);
  });
  return (
    <DateTimePicker
      label={label}
      mode={mode ?? 'single'}
      value={field.state.value}
      onChange={field.handleChange}
      errors={errors}
      selected={undefined}
      {...props}
    />
  );
};

export default ConnectedDatePicker;
