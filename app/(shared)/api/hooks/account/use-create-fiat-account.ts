import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
  createFiatAccount,
  CreateFiatAccountReq,
} from '@/(shared)/api/services/account/create-fiat-account';

export const useCreateFiatAccount = (
  options?: Omit<
    UseMutationOptions<void, AxiosError, CreateFiatAccountReq>,
    'mutationFn'
  >,
) =>
  useMutation({
    mutationFn: createFiatAccount,
    ...options,
  });
