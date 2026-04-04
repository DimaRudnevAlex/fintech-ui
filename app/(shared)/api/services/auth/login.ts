import { axiosRequest } from '@/(shared)/api/request-base';

export type LoginReqDto = {
  username: string;
  password: string;
};

export const login = (data: LoginReqDto): Promise<{ access_token: string }> =>
  axiosRequest<string, { access_token: string }>({
    method: 'POST',
    url: '/auth/login',
    data: new URLSearchParams({
      grant_type: 'password',
      username: data.username,
      password: data.password,
      scope: '',
      client_id: '',
      client_secret: '',
    }).toString(),
  });
