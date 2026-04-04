import { axiosRequest } from '@/(shared)/api/request-base';

export type MeResDto = {
  is_active: boolean;
  user_id: string;
  email: string;
  username: string;
  cr_date: string;
};

export const me = (): Promise<MeResDto> =>
  axiosRequest<void, MeResDto>({
    method: 'GET',
    url: '/auth/me',
  });
