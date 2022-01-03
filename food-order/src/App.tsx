import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Launcher } from '@pages/Launcher';
const queryClient = new QueryClient();
export const App: React.FC = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Launcher />
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </>
  );
};
