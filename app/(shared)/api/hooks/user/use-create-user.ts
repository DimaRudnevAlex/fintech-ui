import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
  createUser,
  CreateUserReqDto,
} from '@/(shared)/api/services/user/create-user';

export const useCreateUser = (
  options?: Omit<
    UseMutationOptions<void, AxiosError, CreateUserReqDto>,
    'mutationFn'
  >,
) => {
  return useMutation({
    mutationFn: createUser,
    ...options,
  });
};
