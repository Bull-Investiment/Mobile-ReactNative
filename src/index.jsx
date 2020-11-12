import React from 'react';
import { ActivityIndicator } from 'react-native';

import { useAuth } from './contexts/auth';

import AppRoutes from './routes/app.routes';
import AuthRoutes from './routes/auth.routes';

import { LoadingView } from './styles';

function Routes() {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <LoadingView>
        <ActivityIndicator size="large" color="#666" />
      </LoadingView>
    )
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;