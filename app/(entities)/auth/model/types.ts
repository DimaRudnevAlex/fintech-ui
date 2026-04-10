import { MeResDto } from '@/(shared)/api/services/auth/me';

import { createAuthStore } from './store';

type AuthActions = {
  setToken: (token: string | null) => void;
  logout: () => void;
  setUserData: (userData: MeResDto) => void;
  setProfileComplete: (value: boolean) => void;
};

export type AuthState = {
  accessToken: string | null;
  isAuthenticated: boolean;
  isBootstrapped: boolean;
  isProfileComplete: boolean;
  userData: MeResDto | null;
};

export type AuthStore = AuthActions & AuthState;

export type AuthStoreApi = ReturnType<typeof createAuthStore>;
