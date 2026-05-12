import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
  AccountItem,
  getAccountList,
} from '@/(shared)/api/services/account/get-account-list';

export const useGetAccountList = (
  options?: Omit<
    UseQueryOptions<AccountItem[], AxiosError, AccountItem[]>,
    'queryKey' | 'queryFn'
  >,
) =>
  useQuery<AccountItem[], AxiosError>({
    queryKey: ['account-list'],
    queryFn: () => getAccountList(),
    ...options,
  });
