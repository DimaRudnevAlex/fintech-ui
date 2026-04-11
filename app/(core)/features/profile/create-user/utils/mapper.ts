import { format } from 'date-fns';

import { CreateUserReqDto } from '@/(shared)/api/services/user/create-user';

import { CreateUserFormValues } from '@/(core)/features/profile/create-user/model/types';

export const mapper = (values: CreateUserFormValues) => {
  const result = {} as CreateUserReqDto;

  result.user_type = values.user_type!.value;
  result.user_names = {
    first_name: values.user_names.first_name,
    last_name: values.user_names.last_name,
    middle_name: values.user_names.middle_name,
    full_name_native:
      values.user_names.last_name +
      values.user_names.first_name +
      values.user_names.middle_name,
  };
  result.user_birth_info = {
    birth_date: format(values.user_birth_info.birth_date!, 'yyyy-MM-dd'),
    birth_place: values.user_birth_info.birth_place,
  };
  result.user_contacts = {
    phone: values.user_contacts.phone,
    additional_email: values.user_contacts.additional_email,
    messenger_name: values.user_contacts.messenger_name,
    messenger_type: values.user_contacts.messenger_type!.value,
  };
  result.user_identity_document = {
    document_type: values.user_identity_document.document_type!.value,
    document_number: values.user_identity_document.document_number,
    issuing_country: 'RUS',
    expiry_date: format(
      values.user_identity_document.expiry_date!,
      'yyyy-MM-dd',
    ),
  };
  result.user_address = {
    country_code: 'RU',
    city: values.user_address.city,
    postal_code: values.user_address.postal_code,
    street_address: values.user_address.street_address,
    state_region: values.user_address.state_region,
  };
  result.user_tax_info = {
    residence_country: 'RU',
    tax_id: values.user_tax_info.tax_id,
    tax_id_type: values.user_tax_info.tax_id_type,
  };

  return result;
};
