import { AxiosRequestConfig } from 'axios';

import axiosInstance from '@/(shared)/api/request-base/axios-instance';

import { ApiParams } from './types';

export const axiosRequest = async <
  TRequestData = unknown,
  TResponseData = void,
>({
  data,
  method,
  url,
  baseURL,
  params,
  headers,
  signal,
  withCredentials = true,
  paramsSerializer,
}: ApiParams<TRequestData>): Promise<TResponseData> => {
  const config: AxiosRequestConfig = {
    baseURL: '/api/',
    data,
    method,
    url,
    params,
    signal,
    withCredentials,
    paramsSerializer,
  };
  if (baseURL) config.baseURL = baseURL;

  config.headers = headers;

  try {
    const response = (await axiosInstance.request(
      config,
    )) as unknown as AxiosRequestConfig;

    if (response.baseURL) {
      const responseWhenConfig = await axiosInstance.request(response);

      return responseWhenConfig.data;
    }

    return response.data;
  } catch (error: unknown) {
    throw error;
  }
};
