import Select from '@/(shared)/components/select';
import { SelectOption } from '@/(shared)/components/select/model/types';
import { useFieldContext } from '@/(shared)/hooks/form/form-context';

import { ConnectedSelectProps } from './model/types';

const ConnectedSelect: React.FC<ConnectedSelectProps> = (props) => {
  const field = useFieldContext<SelectOption>();

  return (
    <Select
      value={field.state.value}
      onChange={field.handleChange}
      errors={field.state.meta.errors.map((error) => error?.message)}
      onBlur={field.handleBlur}
      {...props}
    />
  );
};

export default ConnectedSelect;
