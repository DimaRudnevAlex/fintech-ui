'use client';

import { createContext, useContext, useRef } from 'react';

import { useStore } from 'zustand/index';

import { WithChildren } from '@/(shared)/types/general';

import { createAuthStore } from './store';
import { AuthStore, AuthStoreApi } from './types';

export const AuthContext = createContext<AuthStoreApi | null>(null);

export const AuthStoreProvider: React.FC<WithChildren> = ({ children }) => {
  const storeRef = useRef<AuthStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createAuthStore();
  }

  return (
    // eslint-disable-next-line react-hooks/refs
    <AuthContext.Provider value={storeRef.current}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthStore = <T,>(selector: (store: AuthStore) => T): T => {
  const authStoreContext = useContext(AuthContext);

  if (!authStoreContext) {
    throw new Error(`useAuthStore must be used within AuthStoreProvider`);
  }

  return useStore(authStoreContext, selector);
};
