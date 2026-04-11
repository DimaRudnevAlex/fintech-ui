import { createFormHook } from '@tanstack/react-form';

import ConnectedDatePicker from '@/(shared)/components/form/date-picker';
import ConnectedSelect from '@/(shared)/components/form/select';
import ConnectedTextField from '@/(shared)/components/form/text-field';

import { fieldContext, formContext } from './form-context';

export const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    TextField: ConnectedTextField,
    SelectField: ConnectedSelect,
    DatePicker: ConnectedDatePicker,
  },
  formComponents: {},
  fieldContext,
  formContext,
});
