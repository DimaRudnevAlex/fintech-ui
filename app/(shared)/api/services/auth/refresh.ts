import { axiosRequest } from '@/(shared)/api/request-base';

export type RefreshReqDto = {
  access_token: string;
};
export type RegisterResDto = { user_id: string };

export const refresh = (data: RefreshReqDto): Promise<void> =>
  axiosRequest<RefreshReqDto, void>({
    method: 'POST',
    url: '/auth/refresh-token',

    params: { access_token: data.access_token },
  });
