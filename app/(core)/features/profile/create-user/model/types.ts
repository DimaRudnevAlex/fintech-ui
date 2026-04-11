export type SelectValue = {
  label: string;
  value: string;
} | null;

export interface CreateUserFormValues {
  user_type: SelectValue;

  user_names: { first_name: string; last_name: string; middle_name: string };

  user_birth_info: { birth_date: Date | null; birth_place: string };

  user_contacts: {
    phone: string;
    additional_email: string;
    messenger_name: string;
    messenger_type: SelectValue;
  };

  user_identity_document: {
    document_type: SelectValue;
    document_number: string;
    issuing_country: string;
    expiry_date: Date | null;
  };

  user_address: {
    country_code: string;
    city: string;
    postal_code: string;
    street_address: string;
    state_region: string;
  };

  user_tax_info: {
    residence_country: string;
    tax_id: string;
    tax_id_type: string;
  };
}
