import { CreateUserFormValues } from '@/(core)/features/profile/create-user/model/types';

export const defaultFormValues: CreateUserFormValues = {
  user_type: null,

  user_names: {
    first_name: '',
    last_name: '',
    middle_name: '',
  },

  user_birth_info: {
    birth_date: null,
    birth_place: '',
  },

  user_contacts: {
    phone: '',
    additional_email: '',
    messenger_name: '',
    messenger_type: null,
  },

  user_identity_document: {
    document_type: null,
    document_number: '',
    issuing_country: '',
    expiry_date: null,
  },

  user_address: {
    country_code: '',
    city: '',
    postal_code: '',
    street_address: '',
    state_region: '',
  },

  user_tax_info: {
    residence_country: '',
    tax_id: '',
    tax_id_type: '',
  },
};
