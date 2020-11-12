import React from 'react';

import { useAuth } from './contexts/auth';

import AppRoutes from './routes/app.routes';
import AuthRoutes from './routes/auth.routes';

import { AppLoading } from 'expo';

function Routes() {
  const { signed, loading } = useAuth();

  if (loading) {
    return <AppLoading />;
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;