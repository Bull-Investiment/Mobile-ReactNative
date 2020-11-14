import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';

import Main from '../screens/home/Main';

const { Navigator, Screen } = createStackNavigator();


function HomeStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Main" component={Main} />
    </Navigator>
  );
}

export default HomeStack;