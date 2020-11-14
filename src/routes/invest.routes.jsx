import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';

import Main from '../screens/invest/Main';
import Details from '../screens/invest/Details';

const { Navigator, Screen } = createStackNavigator();


function InvestStack() {
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
              title="INVESTIR"
            />
          )
        }}
      />

      <Screen 
        name="Details" 
        component={Details} 
        options={{
          headerShown: true,
          headerStyle: {
            height: 95,
          },
          header: () => (
            <Header
              title="Sobre o tipo de investimento"
            />
          )
        }}
      />
    </Navigator>
  );
}

export default InvestStack;