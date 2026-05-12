import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
  allFiatCurrencies,
  FiatCurrencies,
} from '@/(shared)/api/services/service/all-fiat-currencies';

export const useGetFiatCurrencies = (): UseQueryResult<
  FiatCurrencies[],
  AxiosError
> =>
  useQuery<FiatCurrencies[], AxiosError>({
    queryKey: ['fiat-currencies'],
    queryFn: allFiatCurrencies,
  });
