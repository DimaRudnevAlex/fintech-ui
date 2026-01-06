import TextField from '@/(shared)/components/text-field';
import { useFieldContext } from '@/(shared)/hooks/form/form-context';

import { ConnectedTextFieldProps } from './model/types';

const ConnectedTextField: React.FC<ConnectedTextFieldProps> = (props) => {
  const field = useFieldContext<string>();

  return (
    <TextField
      value={field.state.value}
      onChange={field.handleChange}
      errors={field.state.meta.errors.map((error) => error?.message)}
      onBlur={field.handleBlur}
      {...props}
    />
  );
};

export default ConnectedTextField;
