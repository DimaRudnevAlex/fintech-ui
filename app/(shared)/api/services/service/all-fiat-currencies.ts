import { axiosRequest } from '@/(shared)/api/request-base';

export type FiatCurrencies = {
  code: string;
  numeric: string;
  name: string;
};

export const allFiatCurrencies = (): Promise<FiatCurrencies[]> =>
  axiosRequest<void, FiatCurrencies[]>({
    method: 'GET',
    url: 'r/service/all-fiat-currencies',
  });
