import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';

import Main from '../screens/profile/Main';

const { Navigator, Screen } = createStackNavigator();


function ProfileStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="Main" 
        component={Main} 
        options={{
          headerShown: true,
          headerStyle: {
            height: 95,
          },
          header: () => (
            <Header
              title="SEU PERFIL"
            />
          )
        }}
      />
      
    </Navigator>
  );
}

export default ProfileStack;