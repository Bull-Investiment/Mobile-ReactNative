import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ThemeProvider } from 'styled-components';

import dark from './styles/theme/dark';

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <ThemeProvider theme={dark}>
      <NavigationContainer>
          <Navigator>
            // telas aqui
          </Navigator>
        </NavigationContainer>
    </ThemeProvider>
  );
}

export default Routes;