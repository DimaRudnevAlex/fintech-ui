'use client';

import { createContext, useCallback, useContext, useState } from 'react';

import { SuccessConfirmation } from '@/(shared)/components/confirmation';
import { haptic } from '@/(shared)/lib/utils/notification/haptic';
import { playSound } from '@/(shared)/lib/utils/notification/sound';

type ConfirmationPayload = {
  title?: string;
  subtitle?: string;
};

const ConfirmationContext = createContext<
  null | ((data?: ConfirmationPayload) => void)
>(null);

export function ConfirmationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<
    {
      open: boolean;
    } & ConfirmationPayload
  >({
    open: false,
  });

  const confirmSuccess = useCallback((data?: ConfirmationPayload) => {
    setState({
      open: true,
      title: data?.title,
      subtitle: data?.subtitle,
    });

    playSound();
    haptic('light');

    setTimeout(() => {
      setState((prev) => ({ ...prev, open: false }));
    }, 2000);
  }, []);

  return (
    <ConfirmationContext.Provider value={confirmSuccess}>
      {children}
      <SuccessConfirmation
        open={state.open}
        title={state.title}
        subtitle={state.subtitle}
        onClose={() => setState((prev) => ({ ...prev, open: false }))}
      />
    </ConfirmationContext.Provider>
  );
}

export const useConfirmation = () => {
  const ctx = useContext(ConfirmationContext);
  if (!ctx) {
    throw new Error(
      'ConfirmationContext must be used within a ConfirmationProvider',
    );
  }
  return ctx;
};
