import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { login, LoginReqDto } from '@/(shared)/api/services/auth/login';
import { authCookieService } from '@/(shared)/lib/auth/auth-cookie';

export const useLogin = (
  options?: Omit<
    UseMutationOptions<void, AxiosError, LoginReqDto>,
    'mutationFn'
  >,
) => {
  return useMutation({
    mutationFn: async (data) => {
      const res = await login(data);
      authCookieService.setAccessToken(res.access_token);
      // return refresh({ access_token: res.access_token });
    },
    ...options,
  });
};
