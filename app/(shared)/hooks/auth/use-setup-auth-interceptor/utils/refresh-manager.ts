import axios, { AxiosResponse } from 'axios';

let refreshPromise: Promise<AxiosResponse> | null = null;

export const refreshAccessToken = (): Promise<AxiosResponse> => {
  if (!refreshPromise) {
    refreshPromise = axios
      .post('api/auth/refresh', undefined, {
        withCredentials: true,
      })
      .finally(() => {
        refreshPromise = null;
      });
  }

  return refreshPromise;
};
