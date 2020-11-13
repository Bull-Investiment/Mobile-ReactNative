import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';

import Welcome from '../screens/auth/Welcome';
import Register from '../screens/auth/register/StepOne';
import RegisterStepTwo from '../screens/auth/register/StepTwo';
import Login from '../screens/auth/Login';

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

      <Screen
        name="Login"
        component={Login}
        options={{
          headerShown: true,
          headerStyle: {
            height: 95,
          },
          header: () => (
            <Header
              title="ENTRE NA SUA CONTA"
            />
          )
        }}
      />
    </Navigator>
  )
}

export default AuthRoutes;