import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
  register,
  RegisterReqDto,
  RegisterResDto,
} from '@/(shared)/api/services/auth/register';

export const useRegister = (
  options?: Omit<
    UseMutationOptions<RegisterResDto, AxiosError, RegisterReqDto>,
    'mutationFn'
  >,
) => {
  return useMutation({
    mutationFn: register,
    ...options,
  });
};
