import { NextPageContext } from 'next';

import { Method, ParamsSerializerOptions } from 'axios';

export type NextPageContextServerApi = Partial<
  Pick<NextPageContext, 'res' | 'req'>
>;

export type ApiParams<T> = {
  data?: T;
  method: Method;
  section?: 'private' | 'public';
  url: string;
  contentType?: string;
  baseURL?: string;
  params?: object;
  headers?: { [key: string]: string };
  signal?: AbortSignal;
  withCredentials?: boolean;
  paramsSerializer?: ParamsSerializerOptions;
};
