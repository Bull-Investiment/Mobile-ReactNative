import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';

const { Navigator, Screen } = createStackNavigator();

function AuthRoutes() {
  return (
    <Navigator>
      <Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false
        }}
      />
    </Navigator>
  )
}

export default AuthRoutes;