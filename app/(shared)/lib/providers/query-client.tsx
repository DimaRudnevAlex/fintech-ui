'use client';

import { useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { WithChildren } from '@/(shared)/types/general';

const QueryProvider: React.FC<WithChildren> = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry(_, error) {
              if (error instanceof AxiosError) {
                const status = error?.status;
                if (status && status >= 400 && status < 500) {
                  return false;
                }
              }

              return true;
            },
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
