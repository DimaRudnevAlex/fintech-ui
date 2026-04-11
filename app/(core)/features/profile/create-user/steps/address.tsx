import Heading from '@/(shared)/components/typography/heading';
import { withForm } from '@/(shared)/hooks/form';

import { CreateUserFormValues } from '@/(core)/features/profile/create-user/model/types';

import styles from './styles.module.scss';

const Address = withForm({
  defaultValues: {} as CreateUserFormValues,
  render: ({ form }) => {
    return (
      <div className={styles.wrapper}>
        <Heading variant="h3" className={styles.title}>
          Адрес проживания
        </Heading>
        <form.AppField name="user_address.country_code">
          {(field) => (
            <field.TextField label="Код страны" placeholder="Тип Код страны" />
          )}
        </form.AppField>

        <form.AppField name="user_address.city">
          {(field) => (
            <field.TextField
              label="Город проживания"
              placeholder="Город проживания"
            />
          )}
        </form.AppField>

        <form.AppField name="user_address.postal_code">
          {(field) => (
            <field.TextField
              label="Почтовый индекс"
              placeholder="Почтовый индекс"
            />
          )}
        </form.AppField>

        <form.AppField name="user_address.street_address">
          {(field) => <field.TextField label="Улица" placeholder="Улица" />}
        </form.AppField>

        <form.AppField name="user_address.state_region">
          {(field) => (
            <field.TextField
              label="Государственный регион"
              placeholder="Государственный регион"
            />
          )}
        </form.AppField>
      </div>
    );
  },
});

export default Address;
