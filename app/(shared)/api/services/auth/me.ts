import { axiosRequest } from '@/(shared)/api/request-base';

export type MeResDto = {
  user_type: string;
  user_names: {
    first_name: string;
    last_name: string;
    middle_name: string;
    full_name_native: string;
  };
  user_birth_info: {
    birth_date: string; // ISO date format YYYY-MM-DD
    birth_place: string;
  };
  user_contacts: {
    phone: string;
    additional_email: string;
    messenger_name: string;
    messenger_type: string; // например, "telegram"
  };
  user_identity_document: {
    document_type: string; // например, "passport"
    document_number: string;
    issuing_country: string; // ISO country code
    expiry_date: string; // ISO date format YYYY-MM-DD
  };
  user_address: {
    country_code: string; // ISO country code
    city: string;
    postal_code: string;
    street_address: string;
    state_region: string;
  };
  user_tax_info: {
    residence_country: string; // ISO country code
    tax_id: string;
    tax_id_type: string; // например, "ИНН"
  };
  business_details: {
    legal_name: string;
    registration_number: string;
    incorporation_date: string; // ISO date format YYYY-MM-DD
    registration_country: string; // ISO country code
    website: string;
    beneficiaries: Array<{
      full_name: string;
      share: number; // процент (0-100)
    }>;
  };
  user_id: string; // UUID format
  cr_date: string; // ISO datetime format
  user_metadata: {
    verification_status: string; // расширяемый enum
    application_version: number;
  };
};

export const me = (): Promise<MeResDto> =>
  axiosRequest<void, MeResDto>({
    method: 'GET',
    url: 'p/users/me',
  });
