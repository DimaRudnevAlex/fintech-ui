import { useStore } from '@tanstack/react-form';

import TextField from '@/(shared)/components/text-field';
import { useFieldContext } from '@/(shared)/hooks/form/form-context';

import { ConnectedTextFieldProps } from './model/types';

const ConnectedTextField: React.FC<ConnectedTextFieldProps> = (props) => {
  const field = useFieldContext<string>();
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
    <TextField
      value={field.state.value}
      onChange={field.handleChange}
      errors={errors}
      onBlur={field.handleBlur}
      {...props}
    />
  );
};

export default ConnectedTextField;
