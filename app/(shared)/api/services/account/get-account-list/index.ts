import { axiosRequest } from '@/(shared)/api/request-base';

export type AccountItem = {
  user_id: string;
  account_number: string;
  currency: string;
  balance: string;
  frozen_balance: string;
  status: 'active' | 'blocked';
  account_type: 'fiat' | 'crypto';
  is_default: boolean;
  blockchain_network: string;
  wallet_address: string;
  memo_tag: string;
  cr_date: string;
};

export const getAccountList = (): Promise<AccountItem[]> =>
  axiosRequest<void, AccountItem[]>({
    method: 'GET',
    url: 'p/account/list',
  });
