import { axiosRequest } from '@/(shared)/api/request-base';

type Item = {
  label: string;
  value: string;
};

export type DictionariesResDto = {
  user_types: Item[];
  messengers: Item[];
  document_types: Item[];
};

export const dictionaries = (): Promise<DictionariesResDto> =>
  axiosRequest<void, DictionariesResDto>({
    method: 'GET',
    url: 'r/dictionaries/profile/all',
  });
