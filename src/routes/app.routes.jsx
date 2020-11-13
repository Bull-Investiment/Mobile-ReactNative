import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import InvestorProfile from './investorProfile.routes';

import { useAuth } from '../contexts/auth';

const { Navigator, Screen } = createStackNavigator();

function AppRoutes() {
  const { userHasInvestorInfo } = useAuth();

  return !userHasInvestorInfo ? (
    <InvestorProfile />
  ) : (
      <View />
    );
}

export default AppRoutes;