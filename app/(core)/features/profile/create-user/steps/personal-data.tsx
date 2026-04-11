import Heading from '@/(shared)/components/typography/heading';
import { withForm } from '@/(shared)/hooks/form';

import { CreateUserFormValues } from '@/(core)/features/profile/create-user/model/types';

import styles from './styles.module.scss';

const PersonalDate = withForm({
  defaultValues: {} as CreateUserFormValues,
  props: {} as { options?: { label: string; value: string }[] },
  render: ({ form, options = [] }) => {
    return (
      <div className={styles.wrapper}>
        <Heading variant="h3" className={styles.title}>
          Ваши контакты
        </Heading>
        <form.AppField name="user_birth_info.birth_date">
          {(field) => <field.DatePicker label="Дата рождения" />}
        </form.AppField>

        <form.AppField name="user_birth_info.birth_place">
          {(field) => (
            <field.TextField
              label="Место рождения"
              placeholder="Место рождения"
            />
          )}
        </form.AppField>

        <form.AppField name="user_contacts.messenger_type">
          {(field) => (
            <field.SelectField
              label="Мессенджер"
              placeholder="Мессенджер"
              options={options}
            />
          )}
        </form.AppField>

        <form.AppField name="user_contacts.messenger_name">
          {(field) => <field.TextField label="Никтейм" placeholder="Никтейм" />}
        </form.AppField>

        <form.AppField name="user_contacts.phone">
          {(field) => <field.TextField label="Телефон" placeholder="Телефон" />}
        </form.AppField>

        <form.AppField name="user_contacts.additional_email">
          {(field) => <field.TextField label="Почта" placeholder="Почта" />}
        </form.AppField>
      </div>
    );
  },
});

export default PersonalDate;
