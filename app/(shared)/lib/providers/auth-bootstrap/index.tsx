'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

import { useQueryClient } from '@tanstack/react-query';

import { useMe } from '@/(shared)/api/hooks/auth/use-me';
import { ROUTES } from '@/(shared)/constants/routes';
import { authCookieService } from '@/(shared)/lib/auth/auth-cookie';
import { buildLoginUrl } from '@/(shared)/lib/helper/build-login-url';
import { WithChildren } from '@/(shared)/types/general';

import { useAuthStore } from '@/(entities)/auth/model/provider';

const ClientLoading = dynamic(
  () => import('@/(shared)/components/loading/loading'),
  { ssr: false },
);

const AuthBootstrap: React.FC<WithChildren> = ({ children }) => {
  const router = useRouter();
  const setUserData = useAuthStore((state) => state.setUserData);
  const setProfileComplete = useAuthStore((state) => state.setProfileComplete);
  const setToken = useAuthStore((state) => state.setToken);
  const logout = useAuthStore((state) => state.logout);

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isBootstrapped = useAuthStore((state) => state.isBootstrapped);
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useMe();

  useEffect(() => {
    const token = authCookieService.getAccessToken();
    if (token) {
      setToken(token);
    }
  }, [setToken]);

  useEffect(() => {
    if (data) setUserData(data);
  }, [data, setUserData]);

  useEffect(() => {
    if (error) {
      if (error.status === 404) {
        setProfileComplete(true);
        router.push(ROUTES.PROFILE);
      } else {
        logout();
        authCookieService.removeAccessToken();
        queryClient.clear();
        router.push(buildLoginUrl());
      }
    }
  }, [error, logout, queryClient, router, setProfileComplete]);

  useEffect(() => {
    return () => {
      authCookieService.removeAccessToken();
      queryClient.clear();
    };
  }, [queryClient]);

  if (!isBootstrapped || isLoading) {
    return <ClientLoading />;
  }

  if (!isAuthenticated) {
    return <ClientLoading />; // null
  }

  return children;
};

export default AuthBootstrap;
