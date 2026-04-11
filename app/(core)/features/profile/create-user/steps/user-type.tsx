import Heading from '@/(shared)/components/typography/heading';
import { withForm } from '@/(shared)/hooks/form';

import { CreateUserFormValues } from '@/(core)/features/profile/create-user/model/types';

import styles from './styles.module.scss';

const UserType = withForm({
  defaultValues: {} as CreateUserFormValues,
  props: {} as {
    options?: { label: string; value: string }[];
    isLoading: boolean;
  },
  render: ({ form, options = [], isLoading }) => {
    return (
      <div className={styles.wrapper}>
        <Heading variant="h3" className={styles.title}>
          Персональные данные
        </Heading>
        <form.AppField name="user_type">
          {(field) => (
            <field.SelectField
              label="Тип пользователя"
              placeholder="Тип пользователя"
              isLoading={isLoading}
              options={options}
            />
          )}
        </form.AppField>

        <form.AppField name="user_names.first_name">
          {(field) => <field.TextField label="Имя" placeholder="Имя" />}
        </form.AppField>

        <form.AppField name="user_names.last_name">
          {(field) => <field.TextField label="Фамилия" placeholder="Фамилия" />}
        </form.AppField>

        <form.AppField name="user_names.middle_name">
          {(field) => (
            <field.TextField label="Отчество" placeholder="Отчество" />
          )}
        </form.AppField>
      </div>
    );
  },
});

export default UserType;
