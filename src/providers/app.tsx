import { theme } from '@/theme';
import { Button, MantineProvider } from '@mantine/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import React from 'react';

import '@mantine/core/styles.css';

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </div>
  );
};

export function AppProvider({ children }: React.PropsWithChildren) {
  return (
    <React.Suspense
      fallback={<div className="flex items-center justify-center w-screen h-screen"></div>}
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <MantineProvider theme={theme}>
          <Router>{children}</Router>
        </MantineProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
}
