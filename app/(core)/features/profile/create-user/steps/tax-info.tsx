import Heading from '@/(shared)/components/typography/heading';
import { withForm } from '@/(shared)/hooks/form';

import { CreateUserFormValues } from '@/(core)/features/profile/create-user/model/types';

import styles from './styles.module.scss';

const TaxInfo = withForm({
  defaultValues: {} as CreateUserFormValues,
  render: ({ form }) => {
    return (
      <div className={styles.wrapper}>
        <Heading variant="h3" className={styles.title}>
          Информация о счетах
        </Heading>
        <form.AppField name="user_tax_info.residence_country">
          {(field) => (
            <field.TextField
              label="Страна проживания"
              placeholder="Страна проживания"
            />
          )}
        </form.AppField>

        <form.AppField name="user_tax_info.tax_id">
          {(field) => <field.TextField label="tax_id" placeholder="tax_id" />}
        </form.AppField>

        <form.AppField name="user_tax_info.tax_id_type">
          {(field) => (
            <field.TextField label="tax_id_type" placeholder="tax_id_type" />
          )}
        </form.AppField>
      </div>
    );
  },
});

export default TaxInfo;
