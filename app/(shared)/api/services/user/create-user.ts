import { axiosRequest } from '@/(shared)/api/request-base';

export type CreateUserReqDto = {
  user_type: string;
  user_names: {
    first_name: string;
    last_name: string;
    middle_name?: string;
    full_name_native: string;
  };

  user_birth_info: {
    birth_date: string;
    birth_place: string;
  };

  user_contacts: {
    phone: string;
    additional_email: string;
    messenger_name: string;
    messenger_type: string;
  };

  user_identity_document: {
    document_type: string;
    document_number: string;
    issuing_country: string;
    expiry_date: string;
  };

  user_address: {
    country_code: string;
    city: string;
    postal_code: string;
    street_address: string;
    state_region?: string;
  };

  user_tax_info: {
    residence_country: string;
    tax_id: string;
    tax_id_type: string;
  };
};

export const createUser = (data: CreateUserReqDto): Promise<void> =>
  axiosRequest<CreateUserReqDto, void>({
    method: 'POST',
    url: 'r/users/create-profile',
    data,
  });
