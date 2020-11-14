import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { Feather } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import InvestorProfile from './investorProfile.routes';

import { useAuth } from '../contexts/auth';

import HomeStack from './home.routes';
import InvestStack from './invest.routes';
import ProfileStack from './profile.routes';


function AppRoutes() {
  const { userHasInvestorInfo } = useAuth();
  const { Navigator, Screen } = createBottomTabNavigator();
  const theme = useContext(ThemeContext);

  return !userHasInvestorInfo ? (
    <InvestorProfile />
  ) : (
      <Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Invest') {
              iconName = 'dollar-sign';
            } else {
              iconName = 'user'
            }

            return <Feather name={iconName} size={32} color={color} />;
          },
        })}
        tabBarOptions={{
          // Color for iOS buttons
          activeTintColor: theme.colors.primary,
          inactiveTintColor: theme.colors.gray,
          showLabel: false,
          style: {
            backgroundColor: theme.colors.backgroundPrimary,
            // colors for Android buttons
            tabBarButtonColor: theme.colors.gray,
            tabBarSelectedButtonColor: theme.colors.primary,
          }
        }}
      >
        <Screen name="Home" component={HomeStack} />
        <Screen name="Invest" component={InvestStack} />
        <Screen name="Profile" component={ProfileStack} />
      </Navigator>
    );
}

export default AppRoutes;