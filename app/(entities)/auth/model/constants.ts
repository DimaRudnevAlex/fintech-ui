import { AuthState } from '@/(entities)/auth/model/types';

export const defaultInitState: AuthState = {
  accessToken: null,
  isAuthenticated: false,
  isBootstrapped: false,
  isProfileComplete: false,
  userData: null,
} as const;
