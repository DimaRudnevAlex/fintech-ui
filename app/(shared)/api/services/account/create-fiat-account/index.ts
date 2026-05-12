import { axiosRequest } from '@/(shared)/api/request-base';

export type CreateFiatAccountReq = {
  account_type: string;
  currency: string;
};

export const createFiatAccount = (data: CreateFiatAccountReq): Promise<void> =>
  axiosRequest<CreateFiatAccountReq, void>({
    method: 'POST',
    url: 'p/account/create-fiat',
    data,
  });
