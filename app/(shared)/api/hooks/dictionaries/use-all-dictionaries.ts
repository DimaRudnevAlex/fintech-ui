import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
  dictionaries,
  DictionariesResDto,
} from '@/(shared)/api/services/dictionaries/all';

export const useAllDictionaries = (): UseQueryResult<
  DictionariesResDto,
  AxiosError
> =>
  useQuery<DictionariesResDto, AxiosError>({
    queryKey: ['dictionaries'],
    queryFn: dictionaries,
  });
