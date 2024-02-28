import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { MainLayout } from '@/components/Layout';
import { Loader } from '@mantine/core';
import { TransactionsDashboard } from '@/features/transactions';

// const { Dashboard } = lazyImport(() => import('@/features/misc'), 'Dashboard');

const ProtectedRoutesApp = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: '/',
    element: <ProtectedRoutesApp />,
    children: [
      { path: '/dashboard', element: <TransactionsDashboard /> },
      { path: '/categories', element: <>Olá</> },
    ],
  },
];
