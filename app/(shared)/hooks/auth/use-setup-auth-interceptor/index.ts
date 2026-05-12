'use client';

import { useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';

import axiosInstance from '@/(shared)/api/request-base/axios-instance';
import { ROUTES } from '@/(shared)/constants/routes';
import { authCookieService } from '@/(shared)/lib/auth/auth-cookie';

import { useAuthStore } from '@/(entities)/auth/model/provider';

import { refreshAccessToken } from './utils/refresh-manager';

const useSetupAuthInterceptor = (): void => {
  const setToken = useAuthStore((state) => state.setToken);
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  useLayoutEffect(() => {
    const refreshInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (
          error.response?.status === 401 &&
          !originalRequest._retry &&
          originalRequest.url !== '/auth/refresh'
        ) {
          originalRequest._retry = true;

          try {
            await refreshAccessToken();
            const newToken = authCookieService.getAccessToken();
            setToken(newToken);

            return originalRequest;
          } catch (errorRefresh) {
            console.error('Refresh error: ', errorRefresh);
            logout();
            authCookieService.removeAccessToken();
            router.push(ROUTES.LOGIN);

            return Promise.reject(errorRefresh);
          }
        }

        return Promise.reject(error);
      },
    );

    return () => axiosInstance.interceptors.response.eject(refreshInterceptor);
  }, [logout, router, setToken]);
};

export default useSetupAuthInterceptor;
