import Heading from '@/(shared)/components/typography/heading';
import { withForm } from '@/(shared)/hooks/form';

import { CreateUserFormValues } from '@/(core)/features/profile/create-user/model/types';

import styles from './styles.module.scss';

const IdentityDocument = withForm({
  defaultValues: {} as CreateUserFormValues,
  props: {} as { options?: { label: string; value: string }[] },
  render: ({ form, options = [] }) => {
    return (
      <div className={styles.wrapper}>
        <Heading variant="h3" className={styles.title}>
          Ваши документы
        </Heading>
        <form.AppField name="user_identity_document.document_type">
          {(field) => (
            <field.SelectField
              label="Тип документа"
              placeholder="Тип документа"
              options={options}
            />
          )}
        </form.AppField>

        <form.AppField name="user_identity_document.document_number">
          {(field) => (
            <field.TextField
              label="Номер документа"
              placeholder="Номер документа"
            />
          )}
        </form.AppField>

        <form.AppField name="user_identity_document.issuing_country">
          {(field) => (
            <field.TextField
              label="Страна выдачи"
              placeholder="Страна выдачи"
            />
          )}
        </form.AppField>

        <form.AppField name="user_identity_document.expiry_date">
          {(field) => (
            <field.DatePicker label="Дата истечения срока действия" />
          )}
        </form.AppField>
      </div>
    );
  },
});

export default IdentityDocument;
