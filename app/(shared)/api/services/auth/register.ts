import { axiosRequest } from '@/(shared)/api/request-base';

export type RegisterReqDto = {
  username: string;
  password: string;
  email: string;
};
export type RegisterResDto = { user_id: string };

export const register = (data: RegisterReqDto): Promise<RegisterResDto> =>
  axiosRequest<RegisterReqDto, RegisterResDto>({
    method: 'POST',
    url: '/auth/register',
    data,
  });
