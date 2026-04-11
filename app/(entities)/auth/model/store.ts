import { createStore, StoreApi } from 'zustand';

import { defaultInitState } from './constants';
import { AuthStore } from './types';

export const createAuthStore: () => StoreApi<AuthStore> = () => {
  return createStore<AuthStore>()((set) => ({
    ...defaultInitState,

    setToken: (token) => {
      if (!token) {
        set({
          accessToken: null,
          isAuthenticated: false,
          isBootstrapped: true,
        });

        return;
      }
      set({
        accessToken: token,
        isAuthenticated: true,
      });
    },

    logout: () => {
      set({ ...defaultInitState });
    },

    setUserData: (data) => {
      set({
        userData: data,
        isAuthenticated: true,
        isBootstrapped: true,
        isProfileComplete: false,
      });
    },

    setProfileComplete: (data) =>
      set({
        isProfileComplete: data,
        isAuthenticated: true,
        isBootstrapped: true,
      }),
  }));
};
