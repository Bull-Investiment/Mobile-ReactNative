import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';

import Welcome from '../screens/Welcome';
import Register from '../screens/Register';
import RegisterStepTwo from '../screens/RegisterStepTwo';

const { Navigator, Screen } = createStackNavigator();

function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="Welcome"
        component={Welcome}
      />
      <Screen
        name="Register"
        component={Register}
        options={{
          headerShown: true,
          headerStyle: {
            height: 95,
          },
          header: () => (
            <Header
              title="FAÇA SUA CONTA"
            />
          )
        }}
      />
      <Screen
        name="RegisterStepTwo"
        component={RegisterStepTwo}
        options={{
          headerShown: true,
          headerStyle: {
            height: 95,
          },
          header: () => (
            <Header
              title="SÓ MAIS ALGUNS PASSOS"
            />
          )
        }}
      />
    </Navigator>
  )
}

export default AuthRoutes;