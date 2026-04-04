import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { me, MeResDto } from '@/(shared)/api/services/auth/me';

export const useMe = (): UseQueryResult<MeResDto, AxiosError> =>
  useQuery<MeResDto, AxiosError>({
    queryKey: ['me'],
    queryFn: me,
  });
